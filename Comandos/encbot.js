var PastebinAPI = require('pastebin-js')

var TokenAPI = "Insira seu token."

exports.run = async (Discord, client, message, args) => {
    
    if(message.author.id !== "429825875467304960") {
        return message.channel.send("Você não pode fazer isso.").then(msg => msg.delete(15*3000))
    }
    var time = Date().split(/ +/g);

    let pastebin = new PastebinAPI({
      'api_dev_key' : TokenAPI,
    });
 
pastebin
    .createPasteFromFile("../database.json", `Backup - DataBase • ${time[2]} de ${time[1]}, ${time[3]}, ás ${time[4]}`, null, 1, "N")
    .then(function (data) {
        let embed = new Discord.RichEmbed()
            .setDescription(`DataBase copiada com sucesso. Backup foi enviado no seu privado.`)
            .setColor("#6699FF")
            .setFooter("Cisla ©")
            .setTimestamp(new Date())
        message.channel.send(embed).then(msg => msg.delete(15*1000))

        message.author.send("Backup database."+ data)
        console.log(data);
    })
    .fail(function (err) {
        console.log(err);
    });

}