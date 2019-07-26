exports.run = async (Discord, client, message, args, db) => {
    let embed = new Discord.RichEmbed()
        .setDescription(`${message.author}, meu repositorio no GitHub é esse [aqui](http://github.com/TriniNz/CislaSource/). Mas se lembre, que copiar não é legal, meu criador liberou para fins de estudo.`)
        .setColor("#6699FF")
        .setFooter("Cisla ©")
        .setTimestamp(new Date()) 
    message.channel.send(embed).then(msg => msg.delete(30*1000))
}