exports.run = async (Discord, client, message, args) => {

    if(!args[0]) {
        
        let EmbedArgumentoErr = new Discord.RichEmbed()
            .setTitle("🎟 | Ticket")
            .setThumbnail(message.author.displayAvatarURL)
            .setDescription(`Houve um erro ao gerar o seu ticket: \`\`\`css\nArgumentos desconhecidos.\`\`\`\n Argumentos disponiveis:\n \n- !Ticket Solicitar → Gera um novo ticket.\n- !Ticket Reciclar → Apaga todos os tickets em seu nome.`)
            .setFooter(`Central de ajudas • Dicas: É sempre bom verificar quais comandos utilizar para não fazer algo errado!`)
            .setTimestamp(new Date)
            .setColor("#ff0000")
        return message.channel.send(EmbedArgumentoErr).then(msg => msg.delete(30*1000))
    
    } else if(args[0].toLowerCase() === "solicitar") {

        let GeneratorID = `"` + Math.random(); + `"`

        let TicketID = GeneratorID.match(/.{1,10}/g)
        
        let EmbedConfirmar = new Discord.RichEmbed()
            .setTitle("🎟 | Ticket")
            .setThumbnail(message.author.displayAvatarURL)
            .setDescription(`${message.author}, está prestes a iniciar um ticket. O ticket é utilizado para ajuda em diversos assuntos, logo, não podemos congestionar este local. *O mal uso deste comando poderá resultar em punição.*\n \nPara continuar reaja com: \`✔\``)
            .setFooter(`Central de ajudas • Ticket • ID: ${TicketID[0]}"`)
            .setTimestamp(new Date)
            .setColor("#6666ff")
        const msg = await message.channel.send(EmbedConfirmar)
            msg.react('✔')
        
            const filter = (reaction, user) => reaction.emoji.name === '✔' && user.id === message.author.id;
            const ConfirmTicket = msg.createReactionCollector(filter, { time: 30*1000, max: 1 });

        ConfirmTicket.on('collect', async react => {
            let channelName = `ticket-${message.author.username}`
                if(!message.guild.channels.find(ch => ch.name === channelName.toLowerCase())) {
                    
                    let chann = await message.guild.createChannel(channelName, {type:'text'})
                        chann.setParent('602699260177285126')//Mudar
                        chann.setTopic(`Seu TicketID: ${TicketID[0]}"`)
                    
                    let EmbedConfirmado = new Discord.RichEmbed()
                        .setTitle("🎟 | Ticket")
                        .setThumbnail(message.author.displayAvatarURL)
                        .setDescription(`${message.author}, seu ticket foi aberto com sucesso. Lembre-se de feicha-lo assim que terminar o procedimento.`)
                        .setFooter(`Central de ajudas • Ticket • ID: ${TicketID[0]}"`)
                        .setTimestamp(new Date)
                        .setColor("#33cc33")
                    msg.edit(EmbedConfirmado).then(m => m.clearReactions())

                    let EmbedEncerrar = new Discord.RichEmbed()
                        .setTitle("🎟 | Ticket")
                        .setThumbnail(message.author.displayAvatarURL)
                        .setDescription(`${message.author}, após ter todos seus problemas resolvidos, não esqueça de encerrar o ticket!\n \nBasta reajir com: ♻`)
                        .setFooter(`Central de ajudas • Ticket • ID: ${TicketID[0]}"`)
                        .setTimestamp(new Date)
                        .setColor("#ffff00")
                    const msgum = await chann.send(EmbedEncerrar)
                        msgum.react('♻')

                    const filterum = (reaction, user) => reaction.emoji.name === '♻' && user.id === message.author.id;
                    const EncerrarTicket = msgum.createReactionCollector(filterum, { max: 1 });

                    EncerrarTicket.on('collect', async react => {
                        chann.delete()
                        
                        let EmbedEncerrado = new Discord.RichEmbed() 
                            .setDescription("🎉 | Este ticket já foi encerrado!")
                            .setColor("#6666ff")
                            .setFooter(`Central de ajudas • Ticket • ID: ${TicketID[0]}"`)
                        msg.edit(EmbedEncerrado)
                    });
                
                } else {
                    let EmbedChannelErr = new Discord.RichEmbed()
                    .setTitle("🎟 | Ticket")
                    .setThumbnail(message.author.displayAvatarURL)
                    .setDescription(`${message.author}, verificamos e descubrimos que você já tem um ticket aberto. Encerre-o primeiro para depois iniciar outro.`)
                    .setFooter(`Central de ajudas • Dicas: Você pode utilizar o comando "!Ticket Reclicar" para acabar com seus tickets abertos!`)
                    .setTimestamp(new Date)
                    .setColor("#ff0000")
                msg.edit(EmbedChannelErr).then(m => m.clearReactions())
            }
        });
    } else if(args[0].toLowerCase() === "reciclar") {
        let channelName = `ticket-${message.author.username}`
        if(message.guild.channels.find(ch => ch.name === channelName.toLowerCase())) {
            let EmbedReciclar = new Discord.RichEmbed() 
                .setDescription("♻ | Tem certeza que deseja reciclar todos seus tickets?")
                .setColor("#6666ff")
                .setFooter(`Reaja com ♻ para confirmar.`)
            const msgrec = await message.channel.send(EmbedReciclar)
                msgrec.react('♻')
                
                const filterdois = (reaction, user) => reaction.emoji.name === '♻' && user.id === message.author.id;
                const ReclicarTicket = msgrec.createReactionCollector(filterdois, { max: 1 });

                ReclicarTicket.on('collect', async react =>{
                    let channe = await message.guild.channels.find(ch => ch.name === channelName.toLowerCase())
                    channe.delete()

                    let EmbedReciclado = new Discord.RichEmbed() 
                        .setDescription("♻ | Seu ticket foi reciclado!")
                        .setColor("#00cc66")
                        .setFooter(`Parabens! Dessa forma você ajuda o meio ambiente.`)
                    msgrec.edit(EmbedReciclado).then(msg => {msg.delete(30*1000), msg.clearReactions()})
                });

        } else {
            let EmbedNoTicket = new Discord.RichEmbed()
                .setDescription("♻ | Você não possui tickets para reclicar")
                .setColor("#00cc66")
                .setFooter(`Parabens! Pode ser uma coisa boa.`)
            message.channel.send(EmbedNoTicket).then(msg => msg.delete(30*1000))
        }

    } else {

        let EmbedArgumentoErr = new Discord.RichEmbed()
            .setTitle("🎟 | Ticket")
            .setThumbnail(message.author.displayAvatarURL)
            .setDescription(`Houve um erro ao gerar o seu ticket: \`\`\`css\nArgumentos desconhecidos.\`\`\`\n Argumentos disponiveis:\n \n- !Ticket Solicitar → Gera um novo ticket.\n- !Ticket Reciclar → Apaga todos os tickets em seu nome.`)
            .setFooter(`Central de ajudas • Dicas: É sempre bom verificar quais comandos utilizar para não fazer algo errado!`)
            .setTimestamp(new Date)
            .setColor("#ff0000")
        return message.channel.send(EmbedArgumentoErr).then(msg => msg.delete(30*1000))
    }
}