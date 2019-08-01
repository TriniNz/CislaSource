exports.run = async (Discord, client, message, args, db) => {

    if(!message.member.roles.some(r=>["Diretor","Administrador","Moderador","Ajudante","trini"].includes(r.name))) {
        let Embed_NoRoleRequire = new Discord.RichEmbed()
            .setDescription("Seu cargo não tem permissões para fazer isso.")
            .setColor("#6699FF")
            .setFooter("Cisla ©")
            .setTimestamp(new Date())
        return message.channel.send(Embed_NoRoleRequire).then(msg => msg.delete(15*1000))
    }
    
    let userMute = message.mentions.members.first()

    var time = Date().split(/ +/g);


    let reason = "Motivo não especificado."
    
    let MuteRole = message.guild.roles.find(r => r.name === "Mute")

    if(args[0]) {

        let valor = db.get("Mutes").find({Usuario: `${userMute}`}).value()

        if(args[0].toLowerCase() === "aplicar") {

            

            if(!MuteRole) {
                try {
                    MuteRole = await message.guild.createRole({
                        name:"Mute",
                        color:"#23272A",
                        permissions: []
                    })

                    message.guild.channels.forEach(async (channel, id) => {
                        await channel.overwritePermissions(MuteRole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                        });
                    })

                } catch(e) {
                    console.log(e)
                }
                
            }

            if(message.guild.members.find(m => m.id === userMute.id).roles.find(r => r.name === "Mute")) {
                    let Embed_Err_Muted = new Discord.RichEmbed()
                        .setDescription("Este usuario já está mutado.")
                        .setFooter(`Use "!mute remover" para desmutar este usuario.`)
                        .setTimestamp(new Date())
                        .setColor("#6699FF")
                return message.channel.send(Embed_Err_Muted)
            } else {

                if(args[2]) {
                    reason = args.slice(2).join(' ')
                }

                client.guilds.get(message.guild.id).members.get(userMute.id).roles.map(r => {
                    userMute.removeRole(r)
                })

                let Embed_Muted = new Discord.RichEmbed()
                    .setTitle("Mute:")
                    .setDescription(`Usuario: ${userMute}\nMotivo: *${reason}*\nResponsavel: ${message.author}`)
                    .setThumbnail(userMute.user.displayAvatarURL)
                    .setFooter("Usuario mutado com sucesso.")
                    .setTimestamp(new Date())
                    .setColor("#6699FF")                

                    db.get("Mutes").push({
                        Usuario: `${userMute}`,
                        Id: `${userMute.user.id}`,
                        Data: `${time[2]} de ${time[1]}, ${time[3]}, ás ${time[4]}`,
                        Motivo: `${reason}`,
                        Responsavel: `${message.author.id}`
                    }).write()

                    message.guild.channels.get("602717447933657099").send(Embed_Muted)
                    userMute.addRole(MuteRole)
            }


        } else if(args[0].toLowerCase() === "remover") {

            if(!message.guild.members.find(m => m.id === userMute.id).roles.find(r => r.name === "Mute")) {
                let Embed_Err_unMuted = new Discord.RichEmbed()
                    .setDescription("Este usuario não está mutado.")
                    .setFooter(`Use "!mute aplicar" para mutar este usuario.`)
                    .setTimestamp(new Date())
                    .setColor("#6699FF")
            return message.channel.send(Embed_Err_unMuted)
        } else {
            let Embed_unMuted = new Discord.RichEmbed()
                .setTitle("Cancelamento de mute:")
                .setDescription(`Usuario: ${userMute}\nResponsavel: ${message.author}`)
                .setThumbnail(userMute.user.displayAvatarURL)
                .setFooter("Usuario desmutado com sucesso.")
                .setTimestamp(new Date())
                .setColor("#6699FF")
            userMute.removeRole(MuteRole).then(unMute => {
                message.guild.channels.get("602717447933657099").send(Embed_unMuted)
                db.get("Mutes").remove({Usuario: `${userMute}`}).write()

            })
        }

        } else if(args[0].toLowerCase() === "verificar") {

            if(message.guild.members.find(m => m.id === userMute.id).roles.find(r => r.name === "Mute")) {
                let Embed_ConfirmMute = new Discord.RichEmbed()
                    .setDescription("Este usuario está mutado.")
                    .addField("Informações:",`**Usuario**: ${valor.Usuario}\n**Data**: ${valor.Data}\n**Motivo**: ${valor.Motivo}\n**Responsavel**: <@${valor.Responsavel}>`)
                    .setTimestamp(new Date())
                    .setColor("#6699FF")
                message.channel.send(Embed_ConfirmMute)
            } else {
                let Embed_ConfirmunMute = new Discord.RichEmbed()
                    .setDescription("Este usuario não está mutado.")
                    .setTimestamp(new Date())
                    .setColor("#6699FF")
                    .setFooter("Cisla ©")
                    .setTimestamp(new Date())
                message.channel.send(Embed_ConfirmunMute)
            }
        } else {

            let Embed_Err_NoArgs = new Discord.RichEmbed()
                .setAuthor("Argumento invalido.", message.author.displayAvatarURL)
                .setDescription("Este argumento é invalido, aqui vai uma lista dos argumentos validos:\n • Aplicar - *Aplica a punição.*\n • Remover - *Remove a punição de um membro.*\n • Verificar - *Verifica se o membro está mutado.*\n ")
                .setFooter("Utilização do comando: !mute aplicar @Usuario Motivo da punição.")
                .setColor("#6699FF")            
                .setTimestamp(new Date())
            message.channel.send(Embed_Err_NoArgs)
        }

    } else {
        let Embed_Err_NoArgs = new Discord.RichEmbed()
            .setAuthor("Argumento não encontrado.", message.author.displayAvatarURL)
            .setDescription("Este argumento é invalido, aqui vai uma lista dos argumentos validos:\n • Aplicar - *Aplica a punição.*\n • Remover - *Remove a punição de um membro.*\n • Verificar - *Verifica se o membro está mutado.*\n ")
            .setFooter("Utilização do comando: !mute aplicar @Usuario Motivo da punição.")
            .setColor("#6699FF")
            .setTimestamp(new Date())
        message.channel.send(Embed_Err_NoArgs)
    }
}