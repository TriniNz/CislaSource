const Request = require('request')
exports.run = async (Discord, client, message, args, db) => {


    var server = "Jogar.Cisla.com.br"
    var api = 'http://mcapi.us/server/status?ip=' + server

    Request(api, function(err, response, body) {
        if(err) {
            console.log(err);
        }
        body = JSON.parse(body);
        
        if(body.online === true) {
        
        function removeColor(text = `${body.motd}`) {
            let motd0 = text;
            let motd1 = motd0.replace(/§0+/g, '')
            let motd2 = motd1.replace(/§1+/g, '')
            let motd3 = motd2.replace(/§2+/g, '')
            let motd4 = motd3.replace(/§3+/g, '')
            let motd5 = motd4.replace(/§4+/g, '')
            let motd6 = motd5.replace(/§5+/g, '')
            let motd7 = motd6.replace(/§6+/g, '')
            let motd8 = motd7.replace(/§7+/g, '')
            let motd9 = motd8.replace(/§8+/g, '')
            let motd10 = motd9.replace(/§9+/g, '')
            let motd11 = motd10.replace(/§a+/g, '')
            let motd12 = motd11.replace(/§b+/g, '')
            let motd13 = motd12.replace(/§c+/g, '')
            let motd14 = motd13.replace(/§d+/g, '')
            let motd15 = motd14.replace(/§l+/g, '')
            let motd16 = motd15.replace(/§o+/g, '')
            let motd17 = motd16.replace(/§f+/g, '')
            let motd = motd17.replace(/§e+/g, '')

            return motd;
        }
            let Embed_true =  new Discord.RichEmbed()
                .setAuthor(server)    
                .setDescription(`${removeColor()}\n\n• Versão: *${body.server.name}*\n• Jogadores: *${body.players.now}/${body.players.max}*`)
                .setColor("#6699FF")
                .setFooter("Cisla ©")
                .setTimestamp(new Date())
            message.channel.send(Embed_true).then(msg => {
                msg.delete(15*1000)
                message.delete(15*1000)
            })
        } else 
        {

            let Embed_false =  new Discord.RichEmbed()
                .setAuthor(server)    
                .setDescription(`O servidor está em manutenção, ou desconectado.`)
                .setColor("#6699FF")
                .setFooter("Cisla ©")
                .setTimestamp(new Date())
            message.channel.send(Embed_false).then(msg => {
                msg.delete(15*1000)
                message.delete(15*1000)
            })
        }
    });

}