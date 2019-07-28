exports.run = async (Discord, client, message, args, db) => {

    let PreçoCores = 25000
    let PreçoApelidos = 50000
    let PreçoÁrea51 = 75000
    let PreçoCreateClan = 125000

    let valor = db.get("RankSystem").find({Id: message.author.id}).value()

    let embed = new Discord.RichEmbed()
        .setAuthor("Shop!")
        .setDescription("Você pode comprar permissões, cargos e muito mais com seus Coins!")
        .addField("1⃣ Cores:","*Você pode escolher a sua cor!*\n • Preço: 25K", true)
        .addField("2⃣ Apelidos:","*Você pode alterar seu apelido sempre que quiser!*\n • Preço: 50K", true)
        .addField("3⃣ Área-52:","*Não quer mais usar o Xvideos? Compre esta permissão e veja o novo mundo se abrir.* **Ao comprar esta permissão, você afirma ter mais de 18 (Dezoito) anos. A rede Cisla não se responsabiliza pelo mal uso deste canal.**\n • Preço: 75K", true)
        .addField("4⃣ Create Clan","Quer ter um canal todinho pra você e seu clan?\n • Preço 125K", true)
        .setColor("#6699FF")
        .setFooter("Cisla © • Seus coins: " + valor.Coins)
        .setTimestamp(new Date())
    message.channel.send(embed).then(async msg => {
        await msg.react('1⃣')
        await msg.react('2⃣')
        await msg.react('3⃣')
        await msg.react('4⃣')

        
        const filterum = (reaction, user) => reaction.emoji.name === '1⃣' && user.id === message.author.id;
        const shopCores = msg.createReactionCollector(filterum, { time: 30*1000, max: 1 });
        
        const filterdois = (reaction, user) => reaction.emoji.name === '2⃣' && user.id === message.author.id;
        const shopApelidos = msg.createReactionCollector(filterdois, { time: 30*1000, max: 1 });

        const filtertres = (reaction, user) => reaction.emoji.name === '3⃣' && user.id === message.author.id;
        const shopArea52 = msg.createReactionCollector(filtertres, { time: 30*1000, max: 1 });

        const filterquatro = (reaction, user) => reaction.emoji.name === '4⃣' && user.id === message.author.id;
        const shopCreateClan = msg.createReactionCollector(filterquatro, { time: 30*1000, max: 1 });

        shopCores.on('collect', async c => {

            msg.clearReactions()

            let cores = new Discord.RichEmbed()
                .setDescription("Escolha sua cor.")
                .addField("1⃣ - Verde","<@&604269065653059584>")
                .addField("2⃣ - Roxo","<@&604268855564435456>")
                .addField("2⃣ - Vermelho","<@&604269194649010185>")
                .setColor("#6699FF")
                .setFooter("Cisla © • Seus coins: " + valor.Coins)
                .setTimestamp(new Date())
            msg.edit(cores).then(async msg2 => {
                await msg.react('1⃣')
                await msg.react('2⃣')
                await msg.react('3⃣')

                const Verde = msg.createReactionCollector(filterum, { time: 30*1000, max: 1 });
                const Roxo = msg.createReactionCollector(filterdois, { time: 30*1000, max: 1 });
                const Vermelho = msg.createReactionCollector(filtertres, { time: 30*1000, max: 1 });

                Verde.on('collect', async c => {
                    if(valor.Coins >= PreçoCores) {
                        let Embed_ColorConfirm = new Discord.RichEmbed()
                            .setDescription("Você comprou a cor Verde!")
                            .setColor("#6699FF")
                            .setFooter("Cisla © • Seus coins: " + valor.Coins)
                            .setTimestamp(new Date())
                        msg2.edit(Embed_ColorConfirm).then(comprado => {
                            let RoleVerde = client.guilds.get("602679739777417256").roles.find(r => r.name === "[✔] - Verde")
                            client.guilds.get("602679739777417256").members.get(message.author.id).addRole(RoleVerde)
                            db.get("RankSystem").find({Id: message.author.id}).assign({Coins: `${valor.Coins - 25000}`}).write()
                        })
                            

                    } else {
                        let Embed_NoCoins = new Discord.RichEmbed()
                            .setDescription("Você não coins suficiente.")
                            .setColor("#6699FF")
                            .setFooter("Cisla © • Seus coins: " + valor.Coins)
                            .setTimestamp(new Date())
                        msg2.edit(Embed_NoCoins).then(msg.delete(15*1000))
                    }
                })

                Roxo.on('collect', async c => {
                    if(valor.Coins >= PreçoCores) {
                        let Embed_ColorConfirm = new Discord.RichEmbed()
                            .setDescription("Você comprou a cor Roxa!")
                            .setColor("#6699FF")
                            .setFooter("Cisla © • Seus coins: " + valor.Coins)
                            .setTimestamp(new Date())
                        msg2.edit(Embed_ColorConfirm).then(comprado => {
                            let RoleRoxo = client.guilds.get("602679739777417256").roles.find(r => r.name === "[✔] - Roxo")
                            client.guilds.get("602679739777417256").members.get(message.author.id).addRole(RoleRoxo)
                            db.get("RankSystem").find({Id: message.author.id}).assign({Coins: `${valor.Coins - 25000}`}).write()
                        })
                            
                    } else {
                        let Embed_NoCoins = new Discord.RichEmbed()
                            .setDescription("Você não coins suficiente.")
                            .setColor("#6699FF")
                            .setFooter("Cisla © • Seus coins: " + valor.Coins)
                            .setTimestamp(new Date())
                        msg2.edit(Embed_NoCoins).then(msg.delete(15*1000))
                    }
                })

                Vermelho.on('collect', async c => {
                    if(valor.Coins >= PreçoCores) {
                        let Embed_ColorConfirm = new Discord.RichEmbed()
                            .setDescription("Você comprou a cor Vermelha!")
                            .setColor("#6699FF")
                            .setFooter("Cisla © • Seus coins: " + valor.Coins)
                            .setTimestamp(new Date())
                        msg2.edit(Embed_ColorConfirm).then(comprado => {
                            let RoleVermelho = client.guilds.get("602679739777417256").roles.find(r => r.name === "[✔] - Vermelho")
                            client.guilds.get("602679739777417256").members.get(message.author.id).addRole(RoleVermelho)
                            db.get("RankSystem").find({Id: message.author.id}).assign({Coins: `${valor.Coins - 25000}`}).write()
                        })
                            
                    } else {
                        let Embed_NoCoins = new Discord.RichEmbed()
                            .setDescription("Você não coins suficiente.")
                            .setColor("#6699FF")
                            .setFooter("Cisla © • Seus coins: " + valor.Coins)
                            .setTimestamp(new Date())
                        msg2.edit(Embed_NoCoins).then(msg.delete(15*1000))
                    }
                })
            })
        })

        shopApelidos.on('collect', async c => {
            if(valor.Coins >= PreçoCores) {
                let Embed_ColorConfirm = new Discord.RichEmbed()
                    .setDescription("Você comprou a permissão de Mudar Apelido.")
                    .setColor("#6699FF")
                    .setFooter("Cisla © • Seus coins: " + valor.Coins)
                    .setTimestamp(new Date())
                msg.edit(Embed_ColorConfirm).then(comprado => {
                    let RoleVerde = client.guilds.get("602679739777417256").roles.find(r => r.name === "[✔] - Mudar Apelido")
                    client.guilds.get("602679739777417256").members.get(message.author.id).addRole(RoleVerde)
                    db.get("RankSystem").find({Id: message.author.id}).assign({Coins: `${valor.Coins - 50000}`}).write()
                    
                });

                } else {
                    let Embed_NoCoins = new Discord.RichEmbed()
                        .setDescription("Você não coins suficiente.")
                        .setColor("#6699FF")
                        .setFooter("Cisla © • Seus coins: " + valor.Coins)
                        .setTimestamp(new Date())
                    msg2.edit(Embed_NoCoins).then(msg.delete(15*1000))
            }
        })

        shopArea52.on('collect', async c => {
            if(valor.Coins >= PreçoCores) {
                let Embed_ColorConfirm = new Discord.RichEmbed()
                    .setDescription("Você comprou a permissão de Acessar a area 52")
                    .setColor("#6699FF")
                    .setFooter("Cisla © • Seus coins: " + valor.Coins)
                    .setTimestamp(new Date())
                msg.edit(Embed_ColorConfirm).then(comprado => {
                    let RoleVerde = client.guilds.get("602679739777417256").roles.find(r => r.name === "[✔] - Área 52")
                    client.guilds.get("602679739777417256").members.get(message.author.id).addRole(RoleVerde)
                    db.get("RankSystem").find({Id: message.author.id}).assign({Coins: `${valor.Coins - 75000}`}).write()
                    
                });

                } else {
                    let Embed_NoCoins = new Discord.RichEmbed()
                        .setDescription("Você não coins suficiente.")
                        .setColor("#6699FF")
                        .setFooter("Cisla © • Seus coins: " + valor.Coins)
                        .setTimestamp(new Date())
                    msg2.edit(Embed_NoCoins).then(msg.delete(15*1000))
            }
        })

        shopCreateClan.on('collect', async c => {
            if(valor.Coins >= PreçoCores) {
                let Embed_ColorConfirm = new Discord.RichEmbed()
                    .setDescription("Você comprou a permissão de Criar clans.")
                    .setColor("#6699FF")
                    .setFooter("Cisla © • Seus coins: " + valor.Coins)
                    .setTimestamp(new Date())
                msg.edit(Embed_ColorConfirm).then(comprado => {
                    let RoleVerde = client.guilds.get("602679739777417256").roles.find(r => r.name === "[✔] - Criar Clan")
                    client.guilds.get("602679739777417256").members.get(message.author.id).addRole(RoleVerde)
                    db.get("RankSystem").find({Id: message.author.id}).assign({Coins: `${valor.Coins - 75000}`}).write()
                    
                });

                } else {
                    let Embed_NoCoins = new Discord.RichEmbed()
                        .setDescription("Você não coins suficiente.")
                        .setColor("#6699FF")
                        .setFooter("Cisla © • Seus coins: " + valor.Coins)
                        .setTimestamp(new Date())
                    msg2.edit(Embed_NoCoins).then(msg.delete(15*1000))
            }
        })

    })



}