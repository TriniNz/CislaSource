exports.run = async (Discord, client, message, args, db) => {

    let embed = new Discord.RichEmbed()
        .setAuthor("Shop!")
        .setDescription("Você pode comprar permissões, cargos e muito mais com seus Coins!")
        .addField("Cores:","*Você pode escolher a sua cor!*\n • Preço: Indisponivel.", true)
        .addField("Apelidos:","*Você pode alterar seu apelido sempre que quiser!*\n • Preço: Indisponivel.", true)
        .addField("Área-52:","*Não quer mais usar o Xvideos? Compre esta permissão e veja o novo mundo se abrir.*\n • Preço: Indisponivel.", true)
        .setColor("#6699FF")
        .setFooter("Cisla © • Seus coins: " + db.get("RankSystem").find({Id: message.author.id}).value().Coins)
        .setTimestamp(new Date())
    message.channel.send(embed).then(msg => msg.delete(30*1000))

}