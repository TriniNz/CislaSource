exports.run = async (Discord, client, message, args, db) => {

    if(!message.member.roles.some(r=>["Diretor","Administrador","Moderador","trini"].includes(r.name))) {
        let Embed_NoRoleRequire = new Discord.RichEmbed()
            .setDescription("Seu cargo não tem permissões para fazer isso.")
            .setColor("#6699FF")
            .setFooter("Cisla ©")
            .setTimestamp(new Date())
        return message.channel.send(Embed_NoRoleRequire).then(msg => msg.delete(15*1000))
    }

    let newPrefix = args[0]

    db.get("Guild").find({id: message.guild.id}).assign({prefix: newPrefix}).write()

    let e = new Discord.RichEmbed()
        .setDescription(`Prefixo foi alterado para: ${newPrefix}`)
        .setColor("#6699FF")
        .setFooter("Cisla © • Prefixo alterado por " + message.author.username + ".")
        .setTimestamp(new Date())
    message.channel.send(e).then(msg => msg.delete(30*1000))

}