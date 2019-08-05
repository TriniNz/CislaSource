exports.run = async (Discord, client, message, args, db) => {

    if(!message.member.roles.some(r=>["Diretor","Administrador","Moderador","Ajudante","trini"].includes(r.name))) {
        let Embed_NoRoleRequire = new Discord.RichEmbed()
            .setDescription("Seu cargo não tem permissões para fazer isso.")
            .setColor("#6699FF")
            .setFooter("Cisla ©")
            .setTimestamp(new Date())
        return message.channel.send(Embed_NoRoleRequire).then(msg => {msg.delete(15*1000); message.delete(15*1000)})
    }

    let Nick = args[0]
    let Motivo = args.slice(1).join(' ')

    if(!Nick) {
        let Embed_NoArgJustify = new Discord.RichEmbed()
            .setDescription("Argumento não encontrado.")
            .setColor("#6699FF")
            .setFooter("Cisla ©")
            .setTimestamp(new Date())
        message.channel.send(Embed_NoArgJustify).then(msg => {msg.delete(15*1000); message.delete(15*1000)})
    }

    if(!Motivo) {
        let Embed_NoArgJustify = new Discord.RichEmbed()
            .setDescription("Argumento não encontrado.")
            .setColor("#6699FF")
            .setFooter("Cisla ©")
            .setTimestamp(new Date())
        message.channel.send(Embed_NoArgJustify).then(msg => {msg.delete(15*1000); message.delete(15*1000)})
    }

    let Embed_Sucess = new Discord.RichEmbed()
        .setDescription("Um usuario acabou de ser punido no servidor.")
        .addField("Informações:",`• **Usuario**: ${Nick}\n• **Motivo**: ${Motivo}\n\n• **Responsavel**: ${message.author}`)
        .setColor("#6699FF")
        .setFooter("Cisla © Você foi banido injustamente? Contate um administrador ou superior para resolver.")
        .setTimestamp(new Date())
    message.guild.channels.get("602717538672967680").send(Embed_Sucess).then(msg => {message.reply("Usuario registrado.").then(msg => msg.delete(15*1000)); message.delete(15*1000)})

}