exports.run = async (Discord, client, message, args, db) => {

    var time = Date().split(/ +/g);
    
    if(!message.member.roles.some(r=>["Diretor","Administrador","Moderador","GC","Ajudante","Extreme","Armagedon","[✔] - Criar Clan"].includes(r.name))) {
        let Embed_NoRoleRequire = new Discord.RichEmbed()
            .setDescription("Seu cargo não tem permissões para fazer isso.")
            .setColor("#6699FF")
            .setFooter("Cisla ©")
            .setTimestamp(new Date())
        return message.channel.send(Embed_NoRoleRequire).then(msg => msg.delete(15*1000))
    }
    
    if(!args[0]) {
        
        let Embed_NoArgs = new Discord.RichEmbed()
            .setDescription(`Não pude encontrar argumentos validos em sua mensagem. Vou listar alguns para você:\n\n • *!clan CRIAR nome* - Cria o seu clan.\n • *!clan INVITE @Membro* - Convida um membro ao seu clan.\n • *!clan KICK @Membro* - Expulsa o membro citado.\n • *!clan INFO name* - Mostrará as informações do clan citado.\n\n`)
            .setColor("#6699FF")
            .setFooter(`Cisla ©`)
            .setTimestamp(new Date())
        message.channel.send(Embed_NoArgs).then(msg => {msg.delete(30*1000); message.delete(30*1000)})
    } 
    else if(args[0].toLowerCase() === "create") {

        if(!args[1]) {
            let Embed_NoArgs = new Discord.RichEmbed()
            .setDescription(`Não pude encontrar argumentos validos em sua mensagem. Vou listar alguns para você:\n\n • *!clan CRIAR nome* - Cria o seu clan.\n • *!clan INVITE @Membro* - Convida um membro ao seu clan.\n • *!clan INFO name* - Mostrará as informações do clan citado.\n\n`)
            .setColor("#6699FF")
            .setFooter(`Cisla ©`)
            .setTimestamp(new Date())
        return message.channel.send(Embed_NoArgs).then(msg => {msg.delete(30*1000); message.delete(30*1000)})
        }
        
        try {

            let valor = db.get("Clans").find({Owner: `${message.author.id}`}).value() 

            if(valor.Owner === message.author.id) {
                let Embed_HaveClan = new Discord.RichEmbed()
                    .setDescription("Você já possui um clan.")
                    .setColor("#6699FF")
                    .setFooter(`Cisla ©`)
                    .setTimestamp(new Date())
                message.channel.send(Embed_HaveClan).then(msg => {
                    msg.delete(30*1000)
                })
            }

        } catch (err) {

            if(err.name === "TypeError") {

                let nome = args.slice(1).join(' ')

                let Embed_Confirm = new Discord.RichEmbed()
                    .setDescription(`${message.author}, tem certeza que deseja criar o clan *${nome}*?`)
                    .setColor("#6699FF")
                    .setFooter(`Cisla ©`)
                    .setTimestamp(new Date())
                message.channel.send(Embed_Confirm).then(ConfirmMsg => {
                    ConfirmMsg.react('✔')

                    const filter = (reaction, user) => reaction.emoji.name === '✔' && user.id === message.author.id;
                    const ConfirmCreateClan = ConfirmMsg.createReactionCollector(filter, { time: 30*1000, max: 1 });

                    ConfirmCreateClan.on('collect', async c => {
                        let Embed_CreatedClan = new Discord.RichEmbed()
                            .setDescription(`Clan criado com sucesso!`)
                            .setColor("#6699FF")
                            .setFooter(`Cisla ©`)
                            .setTimestamp(new Date())
                        ConfirmMsg.edit(Embed_CreatedClan).then(async CreatedClan => {
                            try {

                                let clanRole = await message.guild.createRole({
                                    name: `${nome}`,
                                    color:"#477aff",
                                    position: 12,
                                    mentionable: true,
                                    permissions: []
                                })

                                message.guild.channels.forEach(async (channel, id) => {
                                    await channel.overwritePermissions(clanRole, {
                                        VIEW_CHANNEL: true,
                                        CHANGE_NICKNAME: false,
                                        CREATE_INSTANT_INVITE: false,
                                        CONNECT: true,
                                        SEND_MESSAGES: true
                                        
                                    });
                                })

                                let clanChannel = await message.guild.createChannel(nome, 'text',[{
                                    type: 'role',
                                    id:'523247560006041600',
                                    allow: ['SEND_MESSAGES',"VIEW_CHANNEL"]
                                }])

                                await clanChannel.setParent("604627960099766293")//MUDAR AQUI
                                await clanChannel.lockPermissions()

                                db.get("Clans").push({
                                    Name: `${nome}`,
                                    Owner: `${message.author.id}`,
                                    CreatedDate: `${time[2]} de ${time[1]}, ${time[3]}, ás ${time[4]}`,
                                    ChannelID: `${clanChannel.id}`,
                                    RoleID: `${clanRole.id}`,
                                    MembersCount: 1,
                                    Members: [
                                        `Owner: ${message.author.username}`,
                                    ]
                                }).write()

                                client.guilds.get(message.guild.id).members.get(message.author.id).addRole(clanRole)

                                let Embed_InviteMoreMembers = new Discord.RichEmbed()
                                    .setDescription(`Este é o Clan *${nome}*, aqui vocês podem conversar tranquilamente, apenas membros do clan podem ver este canal.`)
                                    .setColor("#6699FF")
                                    .setFooter(`Cisla ©`)
                                    .setTimestamp(new Date())
                                clanChannel.send(Embed_InviteMoreMembers).then(msg => msg.pin())
            
                            } catch(e) {
                                console.log(e)
                            }


                        })  
                    })
                })
                    
            } else {
                console.log(err)
            }
        }
            
    }

    else if(args[0].toLowerCase() === "delete") {
        //!clan delete
        try {
            let valor = db.get("Clans").find({Owner: `${message.author.id}`}).value()

            let Embed_ConfirmDeleteClan = new Discord.RichEmbed()
            .setDescription(`${message.author}, tem certeza que deseja deletar o clan *${valor.Name}*?`)
            .setColor("#6699FF")
            .setFooter(`Cisla ©`)
            .setTimestamp(new Date())
        message.channel.send(Embed_ConfirmDeleteClan).then(ConfirmMsg => {
            ConfirmMsg.react('✔')

            const filter = (reaction, user) => reaction.emoji.name === '✔' && user.id === message.author.id;
            const ConfirmCreateClan = ConfirmMsg.createReactionCollector(filter, { time: 30*1000, max: 1 });

                ConfirmCreateClan.on('collect', async c => {
        
                    client.guilds.get(message.guild.id).channels.get(valor.ChannelID).delete()
                    client.guilds.get(message.guild.id).roles.get(valor.RoleID).delete()


                    let Embed_Deleted = new Discord.RichEmbed()
                        .setDescription(`O clan *${valor.Name}* foi desfeito.`)
                        .setColor("#6699FF")
                        .setFooter(`Cisla ©`)
                        .setTimestamp(new Date())
                    ConfirmMsg.edit(Embed_Deleted).then(msg => {
                        db.get("Clans").remove({Owner: `${message.author.id}`}).write()
                    });
                });
            });
            
        } catch (err) {
            if(err.name === "TypeError") {
                let Embed_NoClanDelete = new Discord.RichEmbed()
                    .setDescription("Você não possui nem um clan para deletar.")
                    .setColor("#6699FF")
                    .setFooter(`Cisla ©`)
                    .setTimestamp(new Date())
                message.channel.send(Embed_NoClanDelete).then(msg => msg.delete(30*1000))

            } else {
                console.log(err)
            }
        }
    }

    else if(args[0].toLowerCase() === "invite") {
        //!clan invite @usuario

        let clanMember = message.mentions.members.first()

        if(!clanMember) {
            let Embed_NoArgs = new Discord.RichEmbed()
                .setDescription(`Não pude encontrar argumentos validos em sua mensagem. Vou listar alguns para você:\n\n • *!clan CRIAR nome* - Cria o seu clan.\n • *!clan INVITE @Membro* - Convida um membro ao seu clan.\n • *!clan INFO name* - Mostrará as informações do clan citado.\n\n`)
                .setColor("#6699FF")
                .setFooter(`Cisla ©`)
                .setTimestamp(new Date())
            return message.channel.send(Embed_NoArgs).then(msg => {msg.delete(30*1000); message.delete(30*1000)})
        }

        try {
            let valor = db.get("Clans").find({Owner: `${message.author.id}`}).value()

            if(valor.Owner === message.author.id) {

                let Count = valor.MembersCount

                let arrayMembers = []

                if(arrayMembers.length >= 13) {
                    let Embed_ClanFull = new Discord.RichEmbed
                        .setDescription("O seu clan já esta cheio.")
                        .setColor("#6699FF")
                        .setFooter(`Cisla ©`)
                        .setTimestamp(new Date())
                    message.channel.send(Embed_ClanFull).then(msg => msg.delete(15*1000))
                }
                

                let string = "`" + valor.Members + "`"
                let string1 = string.replace("[", '')
                let string2 = string.replace("]", '')
                let string3 = string.replace(/`+/g, '')

                let Embed_InviteEnvied = new Discord.RichEmbed()
                    .setDescription(`${clanMember}, ${message.author} lhe convidou a fazer parte do clan *${valor.Name}*`)
                    .setColor("#6699FF")
                    .setFooter(`Cisla ©`)
                    .setTimestamp(new Date())
                message.channel.send(Embed_InviteEnvied).then(async EnviedInvite => {
                    await EnviedInvite.react('✔')
                    await EnviedInvite.react('✖')

                    const filter = (reaction, user) => reaction.emoji.name === '✔' && user.id === clanMember.user.id;
                    const AcceptInvite = EnviedInvite.createReactionCollector(filter, { time: 30*1000, max: 1 });
                    
                    const filter2 = (reaction, user) => reaction.emoji.name === '✖' && user.id === clanMember.user.id;
                    const NoAccepetInvite = EnviedInvite.createReactionCollector(filter2, { time: 30*1000, max: 1 });

                    AcceptInvite.on('collect', async c => {

                        let Embed_ConfirmAccepted = new Discord.RichEmbed()
                            .setDescription(`${clanMember}, entrou no clan ${valor.Name}`)
                            .setColor("#6699FF")
                            .setFooter(`Cisla ©`)
                            .setTimestamp(new Date())
                        EnviedInvite.edit(Embed_ConfirmAccepted)
                        EnviedInvite.clearReactions()

                        arrayMembers.push(string3)

                        arrayMembers.push(`${clanMember.user.id}@${clanMember.user.username}`)

                        db.get("Clans").find({Owner: message.author.id}).assign({Members: arrayMembers}).write()

                        clanMember.addRole(valor.RoleID)

                        let Embed_Accepted = new Discord.RichEmbed()
                            .setDescription(`${clanMember}, entrou no clan.`)
                            .setColor("#6699FF")
                            .setFooter(`Cisla ©`)
                            .setTimestamp(new Date())
                            message.guild.channels.get(valor.ChannelID).send(Embed_Accepted)

                        db.get("Clans").find({Owner: message.author.id}).assign({MembersCount: arrayMembers.length}).write()
                    });

                    NoAccepetInvite.on('collect', async c => {
                        
                        EnviedInvite.delete()
                        
                        let Embed_noAccepted = new Discord.RichEmbed()
                            .setDescription(`${clanMember}, rejeitou entrar no clan.`)
                            .setColor("#6699FF")
                            .setFooter(`Cisla ©`)
                            .setTimestamp(new Date())
                        message.guild.channels.get(valor.ChannelID).send(Embed_noAccepted)
                    });
                })
            }

        } catch (err) {
            if(err.name === "TypeError") {
                let Embed_NoClanDelete = new Discord.RichEmbed()
                    .setDescription("Você não é o dono deste clan.")
                    .setColor("#6699FF")
                    .setFooter(`Cisla ©`)
                    .setTimestamp(new Date())
                message.channel.send(Embed_NoClanDelete).then(msg => msg.delete(30*1000))
            }
        }
     
    }
    else if(args[0].toLowerCase() === "kick") {
        //!clan kick @usuario

        try {

            let clanMember = message.mentions.members.first()

            let valor = db.get("Clans").find({Owner: `${message.author.id}`}).value()

        if(!clanMember) {
            let Embed_NoArgs = new Discord.RichEmbed()
                .setDescription(`Não pude encontrar argumentos validos em sua mensagem. Vou listar alguns para você:\n\n • *!clan CRIAR nome* - Cria o seu clan.\n • *!clan INVITE @Membro* - Convida um membro ao seu clan.\n • *!clan INFO name* - Mostrará as informações do clan citado.\n\n`)
                .setColor("#6699FF")
                .setFooter(`Cisla ©`)
                .setTimestamp(new Date())
            return message.channel.send(Embed_NoArgs).then(msg => {msg.delete(30*1000); message.delete(30*1000)})
        }

        let arrayMembers = valor.Members

        for(var i=0; i<arrayMembers.length; i++) {
            if(arrayMembers[i] === `${clanMember.id}@${clanMember.user.username}`) {
                let otherArray = arrayMembers.indexOf(i)
                
                arrayMembers.splice(otherArray, 1)

                clanMember.removeRole(valor.RoleID)

                db.get("Clans").find({Owner: message.author.id}).assign({Members: arrayMembers}).write()
                db.get("Clans").find({Owner: message.author.id}).assign({MembersCount: arrayMembers.length}).write()

                let Embed_Kicked = new Discord.RichEmbed()
                    .setDescription(`${clanMember}, foi expulso do clan.`)
                    .setColor("#6699FF")
                    .setFooter(`Cisla ©`)
                    .setTimestamp(new Date())
                message.guild.channels.get(valor.ChannelID).send(Embed_Kicked)
                
            } else {
                let Embed_NoKicked = new Discord.RichEmbed()
                    .setDescription(`Não há nem um membro com este nome no clan.`)
                    .setColor("#6699FF")
                    .setFooter(`Cisla ©`)
                    .setTimestamp(new Date())
                message.channel.send(Embed_NoKicked).then(msg => msg.delete(15*1000))
            }
        }

        } catch (err) {
            if(err.name === "TypeError") {
                let Embed_NoClanDelete = new Discord.RichEmbed()
                    .setDescription("Você não tem nem um clan.")
                    .setColor("#6699FF")
                    .setFooter(`Cisla ©`)
                    .setTimestamp(new Date())
                message.channel.send(Embed_NoClanDelete).then(msg => msg.delete(30*1000))
            
            } else {
                console.log(err)
            }
        }
    }

    else if(args[0].toLowerCase() === "info") {
        //!clan info nome
        try {
            let nome = args.slice(1).join(' ')

            let valor = db.get("Clans").find({Name: `${nome}`}).value()

            let string = "`" + valor.Members + "`"
            let string1 = string.replace(/`+/g, '')
            let members = string1.replace(/,+/g, '\n • ')
            

            let Embed_ClanInfo = new Discord.RichEmbed()
                .setAuthor(`Clan: ${valor.Name}`)
                .addField(`Owner:`, `<@${valor.Owner}>`)
                .addField(`Canal:`,`<#${valor.ChannelID}>`)
                .addField(`Role:`, `<@&${valor.RoleID}>`)
                .addField(`Membros: [${valor.MembersCount}]`,`• ${members}`)
                .setColor("#6699FF")
                .setFooter(`Cisla ©`)
                .setTimestamp(new Date())
            message.channel.send(Embed_ClanInfo).then(msg => {msg.delete(30*1000); message.delete(30*1000)})
            
            } catch (err) {
                if(err.name === "TypeError") {
                let Embed_NoClanDelete = new Discord.RichEmbed()
                        .setDescription("Este clan não existe.")
                        .setColor("#6699FF")
                        .setFooter(`Cisla ©`)
                        .setTimestamp(new Date())
                    message.channel.send(Embed_NoClanDelete).then(msg => msg.delete(30*1000))
            } else {
                console.log(err)
            }
        } 
    }
}