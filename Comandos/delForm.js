exports.run = async (Discord, client, message, args, db) => {

    if(!message.member.roles.some(r=>["Diretor","Administrador","trini"].includes(r.name))) {
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

    let valor = db.get("Formularios").find({Id: `${Usuario.id}`}).value()

    try {

        if(valor.Id) {

            if(!args[1]) {
                let e1 = new Discord.RichEmbed()
                    .setDescription(`Olá <@${valor.Id}>, seu formulario na Rede ${message.guild.name} foi negado. `)
                    .setColor("#6699FF")
                    .setFooter(`Negado por ${message.author.username}, atenciosamente equipe Cisla ©`)
                    .setTimestamp(new Date())
                client.users.get(valor.Id).send(e1)

                message.channel.fetchMessage(valor.MessageID)
                .then(msg => msg.delete())

                db.get("Formularios").remove({Id: `${Usuario.id}`}).write()


            } else {
                let motivo = args.slice(1).join(' ')

                let e = new Discord.RichEmbed()
                    .setDescription(`Olá <@${valor.Id}>, seu formulario na Rede ${message.guild.name} foi negado. Há alguns motivos para isso:\n *• ${motivo}*`)
                    .setColor("#6699FF")
                    .setFooter(`Negado por ${message.author.username}, atenciosamente equipe Cisla ©`)
                    .setTimestamp(new Date())
                client.users.get(valor.Id).send(e)

                message.channel.fetchMessage(valor.MessageID)
                .then(msg => msg.delete())

                db.get("Formularios").remove({Id: `${Usuario.id}`}).write()

            }
            
        }

    } catch (err) {
        let e2 = new Discord.RichEmbed()
            .setDescription(`Não há nem um formulario com este ID.`)
            .setColor("#6699FF")
            .setFooter(`Cisla ©`)
            .setTimestamp(new Date())
        message.channel.send(e2).then(msg => msg.delete(15*1000))

        console.log(err)
    }
}