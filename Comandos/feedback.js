exports.run = async (Discord, client, message, args, db) => {
    
    let msg = args.join(' ')

    let embed = new Discord.RichEmbed()
        .setDescription("Obrigado por ajudar o servidor. Seu feedback foi enviado.")
        .setColor("#6699FF")
        .setFooter("Cisla ©")
        .setTimestamp(new Date())
    message.channel.send(embed).then(msg => {
        message.delete(15*1000)
        msg.delete(15*1000)
    });

    client.users.get("429825875467304960").send(`${message.author}, acabou de enviar um feedback: ${msg}`)

}