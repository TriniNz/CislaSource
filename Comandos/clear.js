exports.run = async (Discord, client, message, args, db) => {
    if(!message.member.roles.some(r=>["Diretor","Administrador","Moderador","Ajudante","trini"].includes(r.name))) {
        let Embed_NoRoleRequire = new Discord.RichEmbed()
            .setDescription("Seu cargo não tem permissões para fazer isso.")
            .setColor("#6699FF")
            .setFooter("Cisla ©")
            .setTimestamp(new Date())
        return message.channel.send(Embed_NoRoleRequire).then(msg => msg.delete(15*1000))
    }

    if(!args) {
        let Embed_NoArgsRequired = new Discord.RichEmbed()
            .setDescription("Comando utilizado incorretamente. `c!clear NumeroDeMensagens.`")
            .setColor("#6699FF")
            .setFooter("Cisla ©")
            .setTimestamp(new Date())
        return message.channel.send(Embed_NoArgsRequired).then(msg => msg.delete(15*1000))
    }

    let mensagens = await message.channel.fetchMessages()

    if(mensagens >= args[1]) {
        message.channel.bulkDelete(mensagens).catch(err => {
            console.log(err)
        }).then(() => {
            let Embed_AllMessagesDeleted = new Discord.RichEmbed()
                .setDescription(message.author + ", apagou " + mensagens + " mensagens.")
                .setColor("#6699FF")
                .setFooter("Cisla ©")
                .setTimestamp(new Date())
            message.channel.send(Embed_AllMessagesDeleted).then(msg => msg.delete(15*1000))
        })

    } else {
        message.channel.bulkDelete(args[0]).catch(err => {
            console.log(err)
        }).then(() => {
            let Embed_AllMessagesDeleted = new Discord.RichEmbed()
                .setDescription(message.author + ", apagou " + args[0] + " mensagens.")
                .setColor("#6699FF")
                .setFooter("Cisla ©")
                .setTimestamp(new Date())
            message.channel.send(Embed_AllMessagesDeleted).then(msg => msg.delete(15*1000))
        })
    }
}