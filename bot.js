const Discord = require('discord.js')
const client = new Discord.Client()
const id = require('./config.json')

    const low = require('lowdb')
    const FileSync = require('lowdb/adapters/FileSync')
    const adapter = new FileSync('DataBase.json')
    const db = low(adapter)

    const adaptercmd = new FileSync('./Comandos/-InfoComandos.json')
    const dbcmd = low(adaptercmd)

const Request = require('request')
const express = require('express');
const keepalive = require('express-glitch-keepalive');
const PastebinAPI = require('pastebin-js')
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

var autoBoleanPiadasRuins = false
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
            `Cisla Store: www.Cisla.com.br`,
            `IP: Jogar.cisla.com.br`,
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
        
        var server = "jogar.cisla.com.br"

        client.guilds.get("602679739777417256").channels.get("602687905642709022").setName(server)
        client.guilds.get("602679739777417256").channels.get("602692031923355670").setName("Membros: " + client.guilds.get("602679739777417256").memberCount)
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

        if(autoBoleanTabble === true) {
            setInterval(() => {
                AutoEditTabble()
            }, 15 * 1000)
        } else {
            AutoEditTabble()
        }

        if(autoBoleanConsole === true ) {
            setInterval(() => {
                AutoRealoadConsole()
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

});

client.on("guildMemberAdd", async Member => {
    let embed = new Discord.RichEmbed()
        .setDescription(`:tada: ${Member}, entrou! Seja bem vindo.`)
        .setThumbnail(Member.user.displayAvatarURL)
        .setColor("#6699FF")
        .setFooter(`Cisla © Você foi o ${client.guilds.get("602679739777417256").memberCount}° membro a entrar!`)
        .setTimestamp(new Date())
    client.guilds.get(Member.guild.id).channels.get("602869949043834900").send(embed)
})

client.on("guildMemberRemove", async Member => {
let embed = new Discord.RichEmbed()
        .setDescription(`${Member}, saiu! Ate mais.`)
        .setThumbnail(Member.user.displayAvatarURL)
        .setColor("#6699FF")
        .setFooter(`Cisla © Você saiu em ${client.guilds.get("602679739777417256").memberCount}° lugar..`)
        .setTimestamp(new Date())
    client.guilds.get(Member.guild.id).channels.get("602870117432426498").send(embed)
})

client.on("message", async message => {

    if(message.author.bot) return;

    const args = message.content.slice(db.get("Guild").find({id: "602679739777417256"}).value().prefix).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    var TokenAPI = "Insira seu token."

    if(comando === "!encrbot") {

        if(message.author.id !== "429825875467304960") {
            return message.channel.send("Você não pode fazer isso.").then(msg => msg.delete(15*3000))
        }
        var time = Date().split(/ +/g);

        let pastebin = new PastebinAPI({
        'api_dev_key' : TokenAPI,
        });
    
    pastebin
        .createPasteFromFile("./DataBase.json", `Backup - DataBase • ${time[2]} de ${time[1]}, ${time[3]}, ás ${time[4]}`, null, 1, "N")
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

    setTimeout(() => {
        var a = []

        db.get("RankSystem").value().map(t => {
        let xp = t.XPcount
        a.push(xp)

        })


        function bubbleSort(a) {
            var swapped;
                do {
                swapped = false;
                    for (var i=0; i < a.length-1; i++) {
                    if (a[i] > a[i+1]) {
                    var temp = a[i];
                    a[i] = a[i+1];
                    a[i+1] = temp;
                    swapped = true;
                    }
                }
            } while (swapped);
        }

        bubbleSort(a);

        let top1qnt = a.length - 1
        let top2qnt = a.length - 2
        let top3qnt = a.length - 3

        let top1search = db.get("RankSystem").find({XPcount: a[top1qnt]}).value()
        let top2search = db.get("RankSystem").find({XPcount: a[top2qnt]}).value()
        let top3search = db.get("RankSystem").find({XPcount: a[top3qnt]}).value()

        let topRole = message.guild.roles.find(r => r.name === "Top Level")

        message.guild.members.map(async m => { 
            if(m.roles.find(r => r.name === "Top Level")) {
                await m.removeRole(topRole)
                m.setNickname(`${m.user.username}`)
            }
        })

        let top1 = message.guild.members.get(top1search.Id)
        let top2 = message.guild.members.get(top2search.Id)
        let top3 = message.guild.members.get(top3search.Id)

        setTimeout(() => {
            top1.addRole(topRole).then(s => {
                top1.setNickname(`[1] ${top1.user.username}`)
            })

            top2.addRole(topRole).then(s => {
                top2.setNickname(`[2] ${top2.user.username}`)
            })

            top3.addRole(topRole).then(s => {
                top3.setNickname(`[3] ${top3.user.username}`)
            })
        }, 500);
        a.length == 0

    }, 2*1000*60*60);


    let valor = db.get("RankSystem").find({Id: message.author.id}).value()
    if(message.content) {

        try {
            if(valor.Id) {
            
                let antigXP = valor.XPcount
                let xpPredefine = [0,1,2,3,4,5,7,10,20,25,31,36,40,45,50,100]
                let random = Math.floor(Math.random()* xpPredefine.length)

                let getXP = xpPredefine[random]                
                let newxp = antigXP += getXP

                db.get("RankSystem").find({Id: message.author.id}).assign({XPcount: newxp}).write()

                let proxLevel = valor.Level * 550

                
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
                    message.guild.channels.get("604812181137129472").send(embed)

                    let antigcoins = valor.Coins
                    let newcoins = antigcoins += coinsPredefine[random2]

                    db.get("RankSystem").find({Id: message.author.id}).assign({Coins: newcoins}).write()
                } 
            }
        } catch(err) {
            if(err.message === "Cannot read property 'Id' of undefined") {
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

    let Textos = [
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


    if(message.channel.id !== "602871021204275223") {//Verifica o canal da mensagem, se for o de musica retorna.

        if(message.content.indexOf("!") == 0) { //Verifica se o inicio da mensagem contem o prefixo.
            try {//Inicio de verificação de erro
                let cmd = comando.replace("!", "")//Remove o prefixo do comando
                
                if(cmd === "encrbot") return;//Retorna este comando em especifico
                
                let cmdfind = dbcmd.get("Comandos").find({aliases: [cmd]}).value()//Procura pelo comando na lista de aliases

                if(cmdfind.manutencao === true) {//Se o comando estiver em manutenção vai executar o arquivo avisando isso.
                    let cmdmanu = require(`./Comandos/-manutenção.js`)
                    return cmdmanu.run(Discord, client, message, args, db)

                } else {// Se não estiver executa o comando normalmente

                    let comandos = require(`./Comandos/${cmdfind.name}.js`);
        
                    comandos.run(Discord, client, message, args, db)
                
                }
    
                } catch(err) {//caso haja erro executara isso →
                    if(err.message === "Cannot read property 'name' of undefined") {
                        let Embed_NOT_FOUND_ERR = new Discord.RichEmbed()
                            .setDescription("Não foi possivel encontrar este comando... Mas você pode encontrar todos meus comandos digitando `!cmdlist`.")
                            .setFooter("Erro: Comando não encontrado.")
                            .setTimestamp(new Date())
                            .setColor("#6699FF")
                        return message.reply(Embed_NOT_FOUND_ERR).then(msg => msg.delete(15*1000))
                } else {
                    console.log(err)
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
            }
        }
    }
});

client.login(id.token)
