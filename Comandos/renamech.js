exports.run = async (Discord, client, message, args) => {

    if(!message.member.roles.some(r=>["Diretor","Administrador","trini"].includes(r.name))) {
        let Embed_NoRoleRequire = new Discord.RichEmbed()
            .setDescription("Seu cargo não tem permissões para fazer isso.")
            .setColor("#6699FF")
            .setFooter("Cisla ©")
            .setTimestamp(new Date())
        return message.channel.send(Embed_NoRoleRequire).then(msg => msg.delete(15*1000))
    }
    
    let c = message.mentions.channels.first()

    if(!c) {
        let name = args.join('\u2009');
        message.guild.createChannel(name, "text").then(message.reply("Canal criado com sucesso."))
    } else {
        let cName = "'" + c.name + "'"
        let cUnicode = '\u2009'

        if(!args[2]) {
            message.guild.channels.get(c.id).setName(cName.replace(/-+/g, cUnicode).replace(/'+/g).replace(/undefined+/g, '')).then(y => message.reply(`espaços adicionados.`))
        } else

        if(args[1]) {
            let name = args.slice(1).join('\u2009');
            message.guild.channels.get(c.id).setName(name).then(message.reply("canal renomeado com sucesso."))
        }
    }
}