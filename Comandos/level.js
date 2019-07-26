exports.run = async (Discord, client, message, args, db) => {

    let valor = db.get("RankSystem").find({Id: message.author.id}).value()

    let embed = new Discord.RichEmbed()
        .setDescription(`${message.author}, Suas informações são estas:\n\n• *Level atual*  ${valor.Level}\n• *XP*  ${valor.XPcount}/${valor.Level * 500}\n\n Coins: ${valor.coins} `)
        .setThumbnail(message.author.displayAvatarURL)
        .setColor("#6699FF")
        .setFooter("Cisla © • Use !shop para gastas seus coins!")
        .setTimestamp(new Date())
    message.channel.send(embed).then(msg=> msg.delete(30*1000))

}