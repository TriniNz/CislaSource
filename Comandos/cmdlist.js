const fs = require('fs')

exports.run = async (Discord, client, message, args, db) => {
    
    fs.readdir("./Comandos", function(err, files){
        const string = "'" + files + "'"
        const string2 = string.replace(/.js+/g, '')
        const string3 = string2.replace(/,+/g, '\n')

        let embed = new Discord.RichEmbed()
            .setDescription(`Olá ${message.author}, atualmente tenho ${files.length} comandos, aqui vai a lista de deles:\n\`\`\`css\n${string3.replace(/'+/g, '\n')}\`\`\``)
            .setColor("#6699FF")
            .setFooter("Cisla ©")
            .setTimestamp(new Date())
        message.channel.send(embed).then(cmd => {cmd.delete(25*1000); message.delete(25*1000)})
    });
}