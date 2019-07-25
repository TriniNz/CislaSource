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

            let e1 = new Discord.RichEmbed()
                .setDescription(`Olá <@${valor.Id}>, seu formulario na Rede ${message.guild.name} foi aceito! Sua tag no servidor já foi setada, aguarde para que seja setada no servidor. `)
                .setColor("#6699FF")
                .setFooter(`Aceito por ${message.author.username}, atenciosamente equipe Cisla ©`)
                .setTimestamp(new Date())
            client.users.get(valor.Id).send(e1)

            if(valor.FormType === "Ajudante") {
                let setRole = message.guild.roles.find(r => r.name === "Ajudante")
                Usuario.addRole(setRole)
            } else if(valor.FormType === "GC-MOD"){
                let setRole = message.guild.roles.find(r => r.name === "GC")
                Usuario.addRole(setRole)
            }

            message.channel.fetchMessage(valor.MessageID).then(msg => msg.delete())

            db.get("Formularios").remove({Id: `${Usuario.id}`}).write()

            let e3 = new Discord.RichEmbed()
                .setDescription(`${Usuario}, foi adicionado a equipe como <@&602708046665220116>`)
                .setColor("#6699FF")
                .setFooter(`Adicionado por ${message.author.username}, atenciosamente equipe Cisla ©`)
                .setTimestamp(new Date())
            client.guilds.get("602679739777417256").channels.get("602714968948998144").send(e3)
            
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