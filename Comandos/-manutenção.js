exports.run = async (Discord, client, message, args, db) => {
    let Embed_Manutenção = new Discord.RichEmbed()
        .setDescription("Este comando está em manutenção. Aguarde para usa-lo ou chame um <@&602708555962908692>.")
        .setColor("#6699FF")
        .setFooter("Cisla ©")
        .setTimestamp(new Date())
    message.channel.send(Embed_Manutenção).then(msg => {msg.delete(15*1000); message.delete(15*1000)})
}