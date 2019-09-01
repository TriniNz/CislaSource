exports.run = async (Discord, client, message, args, db) => {

    let Usuario = message.mentions.users.first();

    if(!Usuario) {
        let valor = db.get("RankSystem").find({Id: message.author.id}).value()

        let embed = new Discord.RichEmbed()
            .setDescription(`${message.author}, Estas são as suas informações:\n\n• *Level atual  ${valor.Level}*\n• *XP  ${valor.XPDisplaycount}*\n• *Coins: ${valor.Coins}*`)
            .setThumbnail(message.author.displayAvatarURL)
            .setColor("#6699FF")
            .setFooter("Cisla © • Use !shop para gastas seus coins!")
            .setTimestamp(new Date())
        message.channel.send(embed).then(msg=> msg.delete(30*1000))
    } else {
        let valor = db.get("RankSystem").find({Id: Usuario.id}).value()

        let embed = new Discord.RichEmbed()
            .setDescription(`Estas são as informações de ${Usuario}:\n\n• *Level atual  ${valor.Level}*\n• *XP  ${valor.XPDisplaycount}*\n• *Coins: ${valor.Coins}*`)
            .setThumbnail(Usuario.displayAvatarURL)
            .setColor("#6699FF")
            .setFooter("Cisla © • Use !shop para gastar seus coins!")
            .setTimestamp(new Date())
        message.channel.send(embed).then(msg=> msg.delete(30*1000))
    }


}