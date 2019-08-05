const ytdl = require('ytdl-core')

exports.run = async (Discord, client, message, args, db) => {
    if(!message.member.roles.some(r=>["Diretor","Administrador","Moderador","Ajudante","Youtuber","MiniYT"].includes(r.name))) {
        let Embed_NoRoleRequire = new Discord.RichEmbed()
            .setDescription("Seu cargo não tem permissões para fazer isso.")
            .setColor("#6699FF")
            .setFooter("Cisla ©")
            .setTimestamp(new Date())
        return message.channel.send(Embed_NoRoleRequire).then(msg => {msg.delete(15*1000); message.delete(15*1000)})
    }
    
    let url = args[0]

    let valid = ytdl.validateURL(url)
    if(!valid) {
        let Embed_InvalidURL = new Discord.RichEmbed()
            .setDescription("Este não é um video do Youtube.")
            .setColor("#6699FF")
            .setFooter("Cisla ©")
            .setTimestamp(new Date())
        return message.channel.send(Embed_InvalidURL).then(msg => {msg.delete(15*1000); message.delete(15*1000)})
    }
    
    let info = await ytdl.getInfo(url)
    let videoInfo = info.player_response.videoDetails


    let embed = new Discord.RichEmbed()
        .setTitle(`${videoInfo.title}`)
        .setURL(url)
        .setThumbnail(`${videoInfo.thumbnail.thumbnails[0].url}`)
        .setDescription(`${message.author}, acabou de soltar um video!`)
        .setFooter("Cisla ©")
        .setTimestamp(new Date())
        .setColor("#6699FF")
    message.guild.channels.get("607973271773904896").send(embed).then(msg => {

        message.reply("Video enviado com sucesso.").then(msg => {msg.delete(15*1000); message.delete(15*1000)})
    })

}