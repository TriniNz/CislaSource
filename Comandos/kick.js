exports.run = async (Discord, client, message, args, db) => {

    var time = Date().split(/ +/g);

    if(!message.member.roles.some(r=>["Diretor","Administrador","Moderador","trini"].includes(r.name))) {
        let Embed_NoRoleRequire = new Discord.RichEmbed()
            .setDescription("Seu cargo não tem permissões para fazer isso.")
            .setColor("#6699FF")
            .setFooter("Cisla ©")
            .setTimestamp(new Date())
        return message.channel.send(Embed_NoRoleRequire).then(msg => msg.delete(15*1000))
    }

    let Usuario = message.mentions.members.first();
        if(!Usuario) {
            let Embed_NoRoleRequire = new Discord.RichEmbed()
            .setDescription("É necessario marcar um membro valido do servidor.")
            .setColor("#6699FF")
            .setFooter("Cisla ©")
            .setTimestamp(new Date())
        return message.channel.send(Embed_NoRoleRequire).then(msg => msg.delete(15*1000))
        }

    let reason = args.slice(1).join(' ')
        if(!args.slice(1)) {
            reason == "Não especificado."
        }

        let Embed_Confirmado = new Discord.RichEmbed()
            .setDescription(`Um usuario acabou de ser expulso.\n\n **Membro**: ${Usuario.user.username}\n **Motivo**: ${reason}\n**Responsavel**: ${message.author}\n\n `)
            .setThumbnail(Usuario.user.displayAvatarURL)
            .setColor("#6699FF")
            .setFooter("Cisla ©")
            .setTimestamp(new Date())
        message.guild.channels.get("602717447933657099").send(Embed_Confirmado)

        message.reply("você baniu " + Usuario.user.username + ".").then(msg => msg.delete(15*1000))

        db.get("Kicks").push({
            Usuario: `${Usuario}`,
            Id: `${Usuario.user.id}`,
            Data: `${time[2]} de ${time[1]}, ${time[3]}, ás ${time[4]}`,
            Motivo: `${reason}`,
            Responsavel: `${message.author.id}`
        }).write()

        await Usuario.kick(`Aplicado pelo: ${message.author.tag} | Motivo: ${reason} | Data: ${time[2]}/${time[3]} ás ${time[4]}`)


}