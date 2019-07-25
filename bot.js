const Discord = require('discord.js')
const client = new Discord.Client()
const id = require('./config.json')

const Request = require('request')

    const low = require('lowdb')
    const FileSync = require('lowdb/adapters/FileSync')
    const adapter = new FileSync('DataBase.json')
    const db = low(adapter)

var autoBoleanPiadasRuins = true
var autoBoleanConsole = false 
var autoBoleanStatus = true
var autoBoleanTabble = true

var uptime_s = 0
var uptime_m = 0
var uptime_h = 0
var uptime_d = 0

client.on("ready", () => {
    console.log("Iniciando...")


var time = Date().split(/ +/g);

    function AutoRealoadConsole() {
        console.log(" ")
        console.log(" ")
        console.log(" ")
        console.log(" ")
        console.log(" ")
        console.log(" ")
        console.log("┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────")
        console.log(`│ CislaSource - Iniciado ${time[2]} de ${time[1]}, ${time[3]}, ás ${time[4]}`)
        console.log(`│`)
        console.log(`│ Status: Online`)
        console.log(`│ Uptime: ${uptime_h}:${uptime_m}:${uptime_s}`)
        console.log(`│`)
        console.log(`│ Guilds: ${client.guilds.size}               Usuarios: ${client.users.size}`)
        console.log(`│ Ping: ${Math.floor(Math.random()* (60 - 10)) + 10}`)
        console.log("└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────")
    }

    function AutoStatusEdit() {
        let stats = [
            `Support: ${client.guilds.get("602679739777417256").members.get("429825875467304960").user.tag}`,
            `Cisla Store: www.Cisla.shop.com`,
            `Jogar.Cisla.host.com`,
            `Meu prefixo é ${db.get("Guild").find({id: "602679739777417256"}).value().prefix}`,
            `Voce pode ver meus comandos utilizando ${db.get("Guild").find({id: "602679739777417256"}).value().prefix}cmdlist.`,
            `Eu estou em fase beta! Pode haver muitos bugs.`,
            `Eu sou Open-Source! Você pode ver meu codigo usando ${db.get("Guild").find({id: "602679739777417256"}).value().prefix}source`
        ]
        let aleatorio = Math.floor(Math.random() * stats.length)
        client.user.setPresence({ status: "idle", game: {name: `${stats[aleatorio]}`, type: "streaming", url: `https://www.twitch.tv/ztrininz_`}});
        
    }

    function AutoEditTabble() {
        
        var server = "Indisponivel"

        client.guilds.get("602679739777417256").channels.get("602687905642709022").setName(server)
        client.guilds.get("602679739777417256").channels.get("602692031923355670").setName("Membros: " + client.users.size)
        var url = 'http://mcapi.us/server/status?ip=' + server

        Request(url, function(err, response, body) {
            if(err) {
                console.log(err);
            }
            body = JSON.parse(body);
            
            if(body.online === true) {
                client.guilds.get("602679739777417256").channels.get("602692371393675264").setName("Status: Online")
                client.guilds.get("602679739777417256").channels.get("602692209275305994").setName("Jogadores: " + body.players.now)
            } else {
                client.guilds.get("602679739777417256").channels.get("602692371393675264").setName("Status: Manutenção")
                client.guilds.get("602679739777417256").channels.get("602692209275305994").setName("Jogadores: -")
            }
            
        });
    }

        /*if(autoBoleanTabble === true) {
            setTimeout(() => {
                AutoEditTabble()
            }, 15 * 1000)
        } else {
            AutoEditTabble()
        }*/

        if(autoBoleanConsole === true ) {
            setInterval(() => {
                AutoReloadStatus()
            },5*1000);
        } else {
            AutoRealoadConsole()
        }
    
        if(autoBoleanStatus === true) {
            setInterval(() => {
                AutoStatusEdit()
            },15*1000);
        } else {
            AutoStatusEdit()
        }

    setInterval(() => {
        uptime_s += 1
        if(uptime_s >= 60) {
            uptime_m += 1;
            uptime_s = 0
        }
        if(uptime_m >= 60) {
            uptime_h += 1
            uptime_m = 0
        }
        if(uptime_h >= 24) {
            uptime_d += 1
            uptime_h = 0
            uptime_m = 0
            uptime_s = 0
        }
    }, 1000);

});

client.on("message", async message => {

    if(message.author.bot) return;

    const args = message.content.slice(id.prefix).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();


    if(autoBoleanPiadasRuins) {

        Textos = [
            "eae men, por que a aranha é o animal mais carente do mundo?\n \npor que ela é um AracNeedYou",
            "fala ae meu bom, por que pinheiro não se perde na floresta?\n \npor que ele tem uma pinha",
            "opa meu grande, sabe o que um caipira falou pra o outro quando estavam assistindo tv?\n \n- Iai, firme?\n- Não, futebor.",
            "tu sabe o que o pagodeiro foi fazer na igreja?\n \nRezar pá god."

                ]
    aleatorio = Math.floor(Math.random() * Textos.length)

        let random = Math.floor(Math.random()* (60 - 10)) + 10

        
        setInterval(() => {

            message.reply(`${Textos[aleatorio]}`)
        }, random * 1000 * 60);
    }



    let invblock = ["discord.gg", "discord.me", "disc0rd.gg", "d1sc0rd.gg", "disc0rd.me", "d1sc0rd.me"];
  
   for (var i in invblock) {    
    if (message.content.toLowerCase().includes(invblock[i].toLowerCase())) {
        
            await message.delete(500)
            let Embed_Divulgar = new Discord.RichEmbed()
                .setDescription(`${message.author}, você não pode divulgar aqui.`)
                .setTimestamp(new Date())
                .setFooter("Cisla ©")
            message.channel.send(Embed_Divulgar)
        }
    }


    if(message.channel.id !== "602871021204275223") {

        if(message.content.toLowerCase().indexOf(`${db.get("Guild").find({id: message.guild.id}).value().prefix}`) == 0) {

            let cmd = comando.split(`${db.get("Guild").find({id: message.guild.id}).value().prefix}`)
        
            try {

            let comandos = require(`./Comandos/${cmd[1]}.js`);

                comandos.run(Discord, client, message, args, db)
            } catch (e) {


                if(e.code === 'MODULE_NOT_FOUND') {
                    console.log("⠀");
                    console.log(`Erro: um player tentou executar um comando inexistente (${comando}).`);
                    console.log("⠀");

                    let Embed_NOT_FOUND_ERR = new Discord.RichEmbed()
                        .setDescription("Não foi possivel encontrar este comando... Mas você pode encontrar todos meus comandos digitando `!cmdlist`.")
                        .setFooter("Erro: Comando não encontrado.")
                        .setTimestamp(new Date())
                        .setColor("#6699FF")
                    return message.reply(Embed_NOT_FOUND_ERR).then(msg => msg.delete(15*1000))
                } else {
                    console.log(e)
                    console.log(" ")
                    console.log(`Erro: Há um erro no codigo (${comando}).`)
                    console.log(" ")

                    let Embed_NOT_DEFINED_ERR = new Discord.RichEmbed()
                        .setDescription("Hey, eu acho que tem um bug neste codigo :thinking:, eu já chamei meu criador para resolver isso!")
                        .setFooter("Erro: Não definido")
                        .setTimestamp(new Date())
                        .setColor("#6699FF")
                    return message.reply(Embed_NOT_DEFINED_ERR).then(msg => msg.delete(15*1000))
                }
            } finally {};
        }

    }
});

client.login(id.token)