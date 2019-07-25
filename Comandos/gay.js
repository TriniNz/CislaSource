exports.run = async (Discord, client, message, args) => {

    var mensagem = " "

    let Usuario = message.mentions.members.first()
        if(!Usuario) {
            let e = new Discord.RichEmbed()
                .setAuthor("Gay", message.author.displayAvatarURL)
                .setDescription("Argumento não encontrado.")
                .setColor("#6699FF")
                .setFooter("Cisla ©")
                .setTimestamp(new Date())

            return message.channel.send(e).then(msg => msg.delete(15*1000))
        }
    
    let porcentagem = [
        "1","10","27","34","42","51","63","71","89","95","100"
    ]

    aleatorio = Math.floor(Math.random() * porcentagem.length);

        if(porcentagem[aleatorio] >= 50 ) {
            mensagem = "Ih ala, adora uma beterraba safado?"
        } else {
            mensagem = "Ai ta safe manito"
        }
    
    let e = new Discord.RichEmbed()
        .setAuthor("Gay", message.author.displayAvatarURL)
        .setTitle(`${mensagem} ${Usuario.user.username} é ` + porcentagem[aleatorio] + "% gay.")
        .setColor("#6699FF")
        .setFooter("Cisla ©")
        .setThumbnail(Usuario.user.displayAvatarURL)
    message.channel.send(e)
}