exports.run = async (Discord, client, message, args, db) => { 
    var time = Date().split(/ +/g);

    if(time[2] >= 11) {
        let Embed = new Discord.RichEmbed()
            .setDescription("O servidor não está mais em fase beta.")
            .setColor("#6699FF")
            .setFooter("Cisla ©")
            .setTimestamp(new Date())
        message.channel.send(Embed).then(msg => {msg.delete(15*1000); message.delete(15*1000)})
    } else {
        if(message.guild.members.find(m => m.id === message.author.id).roles.find(r => r.name === "[ß] - Beta")) {
            let Embed_ErrSettag = new Discord.RichEmbed()
                .setDescription("Você já tem a tag Beta!")
                .setFooter("Cisla ©")
                .setTimestamp(new Date())
                .setColor("#6699FF")
        return message.channel.send(Embed_ErrSettag).then(msg => {msg.delete(15*1000); message.delete(15*1000)})
        } else {
            let tagBeta = message.guild.roles.find(r => r.name === "[ß] - Beta")
            message.guild.members.find(m => m.id === message.author.id).addRole(tagBeta)
            let Embed_TagBeta = new Discord.RichEmbed()
                .setDescription("Tag setada com sucesso.")
                .setFooter("Cisla ©")
                .setTimestamp(new Date())
                .setColor("#6699FF")
            message.channel.send(Embed_TagBeta).then(msg => {msg.delete(15*1000); message.delete(15*1000)})
        }
    }
}