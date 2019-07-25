const db = require("../DataBase.json")
exports.run = async (Discord, client, message, args) => {

    let Formularios = db.Formularios.length
    let Bans = db.Bans.length
    let Mutes = db.Mutes.length
    let Kicks = db.Kicks.length
    let Membros = client.users.size

    let Embed = new Discord.RichEmbed()
        .setDescription(`:chart_with_upwards_trend: Essas são as estatisticas do servidor:\n\n:bookmark: Formularios já feitos: ${Formularios}\n:middle_finger: Bans ate agora: ${Bans}\n:speaking_head: Mutes aplicados: ${Mutes}\n:comet: Membros já expulsos: ${Kicks}`)
        .setColor("#6699FF")
        .setFooter("Cisla ©")
        .setTimestamp(new Date())  
    message.channel.send(Embed).then(msg => msg.delete(30*1000))
}