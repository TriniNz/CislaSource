const Discord = require('discord.js')
const client = new Discord.Client()
const id = require('./config.json')

const Request = require('request')
const express = require('express');
const keepalive = require('express-glitch-keepalive');
//npm i --save express express-glitch-keepalive

const app = express();
app.use(keepalive);
app.get('/', (req, res) => {
res.json('Este bot deve estar online! Uptimerobot vai mantê-lo vivo');
});
app.get("/", (request, response) => {
response.sendStatus(200);
});
app.listen(process.env.PORT);



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

client.on("guildMemberAdd", async Member => {
        let embed = new Discord.RichEmbed()
            .setDescription(`:tada: ${Member}, entrou! Seja bem vindo.`)
            .setThumbnail(message.author.displayAvatarURL)
            .setColor("#6699FF")
            .setFooter(`Cisla © Você foi o ${client.users.size}° membro a entrar!`)
            .setTimestamp(new Date())
        message.guild.channels.get("602869949043834900").send(embed)
})

client.on("guildMemberRemove", async Member => {
    let embed = new Discord.RichEmbed()
            .setDescription(`${Member}, saiu! Ate mais.`)
            .setThumbnail(message.author.displayAvatarURL)
            .setColor("#6699FF")
            .setFooter(`Cisla © Você foi o ${client.users.size}° membro a sair..`)
            .setTimestamp(new Date())
        message.guild.channels.get("603351890922831892").send(embed)
})

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
            `Achou um bug? Use ${db.get("Guild").find({id: "602679739777417256"}).value().prefix}feedback e reporte-o.`,
            `Eu estou em fase beta! Pode haver muitos bugs.`,
            `Meu maior comando tem 116K de caracteres!`,
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

    const args = message.content.slice(db.get("Guild").find({id: "602679739777417256"}).value().prefix).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();


    let valor = db.get("RankSystem").find({Id: message.author.id}).value()
    if(message.content) {

        try {
            if(valor.Id) {
            
                let antigXP = valor.XPcount
                let xpPredefine = [0,1,10,15,20,25,50,75,100]
                let random = Math.floor(Math.random()* xpPredefine.length)

                let getXP = xpPredefine[random]                
                let newxp = antigXP += getXP

                db.get("RankSystem").find({Id: message.author.id}).assign({XPcount: newxp}).write()

                let proxLevel = valor.Level * 500

                
                if(proxLevel <= valor.XPcount) {
                    let newLevel = valor.Level + 1

                    db.get("RankSystem").find({Id: message.author.id}).assign({Level: newLevel}).write()

                    let coinsPredefine = [5,8,10,14,17,20]
                    let random2 = Math.floor(Math.random()* coinsPredefine.length)


                    let embed = new Discord.RichEmbed()
                        .setDescription(`:tada: ${message.author}, parabéns, Você upou de level!\n\n• *Level atual* ${valor.Level}\n• *XP* ${valor.XPcount}/${valor.Level * 500}\n\n Você ganhou ${coinsPredefine[random2]} coins como recompensa!`)
                        .setThumbnail(message.author.displayAvatarURL)
                        .setColor("#6699FF")
                        .setFooter("Cisla ©")
                        .setTimestamp(new Date())
                    message.guild.channels.get("603351890922831892").send(embed)

                    let antigcoins = valor.Coins
                    let newcoins = antigcoins += coinsPredefine[random2]

                    db.get("RankSystem").find({Id: message.author.id}).assign({Coins: newcoins}).write()
                
                } 
            }
        } catch(err) {
            if(err.name === "TypeError") {
                db.get("RankSystem").push({
                    Usuario: `${message.author.username}`,
                    Id: `${message.author.id}`,
                    XPcount: 0,
                    Level: 1,
                    Coins: 0
                }).write()
            } else {
                console.log(err)
            }
        }
    }


    if(autoBoleanPiadasRuins) {

        Textos = [
            "eae men, por que a aranha é o animal mais carente do mundo?\n \npor que ela é um AracNeedYou",
            "fala ae meu bom, por que pinheiro não se perde na floresta?\n \npor que ele tem uma pinha",
            "opa meu grande, sabe o que um caipira falou pra o outro quando estavam assistindo tv?\n \n- Iai, firme?\n- Não, futebor.",
            "tu sabe o que o pagodeiro foi fazer na igreja?\n \nRezar pá god."

                ]
    let aleatorio = Math.floor(Math.random() * Textos.length)

        let random = Math.floor(Math.random()* (250 - 50)) + 50

        
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

        if(message.content.toLowerCase().indexOf(db.get("Guild").find({id: "602679739777417256"}).value().prefix) == 0) {

            let cmd = comando.split(db.get("Guild").find({id: "602679739777417256"}).value().prefix)
        
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