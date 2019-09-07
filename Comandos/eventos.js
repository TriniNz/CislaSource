exports.run = async (Discord, client, message, args, db) => {

    if(!message.member.roles.some(r=>["Diretor","Administrador","trini"].includes(r.name))) {
        let Embed_NoRoleRequire = new Discord.RichEmbed()
            .setDescription("Seu cargo não tem permissões para fazer isso.")
            .setColor("#6699FF")
            .setFooter("Cisla ©")
            .setTimestamp(new Date())
        return message.channel.send(Embed_NoRoleRequire).then(msg => msg.delete(15*1000))
    }


    message.channel.send(new Discord.RichEmbed()
        .setAuthor("Eventos Disponiveis:")
        .addField("🔢 Acerte o numero!","Será sorteado um numero de 0 a 100, aquele que acetar o numero primeiro vence!")
        .addField("🤓 Quiz!"," Será sorteado uma pergunta entre as materias *historia*,*ciencias*,*entretenimento* e *esportes*, aquele que acertar em primeiro lugar vence!")
        .setColor("#6699FF")
        .setFooter("Cisla ©")
        .setTimestamp(new Date())
    ).then(async Seleção => {
        await Seleção.react('🔢')
        await Seleção.react('🤓')

        const filter = (reaction, user) => reaction.emoji.name === '🔢' || reaction.emoji.name === '🤓' && user.id === message.author.id;
        const collected = Seleção.createReactionCollector(filter, {max: 1});

        collected.on('collect', async r =>{
            switch (r.emoji.name) {
                case '🔢':
                message.channel.send("Qual será o premio deste evento?").then(msg => {
                    const filter = msg => msg.author.id
                    const premioCollect = message.channel.createMessageCollector(filter, {max: 1})

                    premioCollect.on('collect', async p => {
                        let premio = p.content

                        let sortido = Math.floor(Math.random() * 100)

                        message.channel.send(new Discord.RichEmbed()
                            .setTitle("🔢 Acerte o numero!")
                            .setDescription('Um numero de 0 a 100 foi sorteado, você sabe qual é?')
                            .addField("Premio:", premio)
                            .setColor("#6699FF")
                            .setFooter(`Cisla © - Responsavel pelo evento: ${message.author.username}.`)
                            .setTimestamp(new Date())
                        ).then(async msg => {
                            message.author.send("O numero sorteado foi: " + sortido)
                            message.channel.send("@everyone").then(ever => ever.delete(500))

                            const filterhelper = msg => msg.content.toLowerCase().includes(`${sortido}`)
                            const collected = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 60*1000*60});
                    

                            collected.on('collect', async c => {
                                message.channel.send(new Discord.RichEmbed()
                                    .setDescription("🏅 O evento foi encerrado, e já temos um vencedor!")
                                    .addField("O vencedor foi...", `🎉 ${c.author}! O numero sorteado era: ${sortido}`)
                                    .setColor("#6699FF")
                                    .setFooter(`Cisla © - Responsavel pelo evento: ${message.author.username}.`)
                                    .setTimestamp(new Date())
                                )
                            })
                        })

                    })
                });
                break;
                case '🤓':
                    //{pergunta: "", resposta: ""}
                    let categorias = 
                    [
                        {categoria: "entretenimento",
                            questoes:[

                            {pergunta: "Qual é a principal emissora de TV no Brasil atualmente?", resposta: "globo"}

                        ]},
                        {categoria:"esportes",
                            questoes:[

                            {pergunta: "Qual o número mínimo de jogadores em uma partida de Futebol?", resposta: "7"},
                            {pergunta: "Qual a altura da rede em jogos de voleí feminino?", resposta: "2,24"}

                        ]},
                        {categoria:"historia",
                            questoes:[

                            {pergunta: "Qual presidente brasileiro ficou conhecido como Jango?", resposta: "joão goulart"},
                            {pergunta: "Que país que tem realizado testes nucleares e ameaça principalmente os Estados Unidos da América?", resposta: "coreia do norte"}

                        ]},
                        {categoria:"ciências",
                            questoes:[

                            {pergunta: "Qual menor país do mundo?", resposta: "vaticano"},
                            {pergunta: "Qual tipo sanguíneo é considerado universal?", resposta: "O"}

                        ]}
                    ]

                    let selectCategory = Math.floor(Math.random() * categorias.length)
                    let selectQuestion = Math.floor(Math.random() * categorias[selectCategory].questoes.length)

                    let selectedCategory = categorias[selectCategory].categoria
                    let selectedQuestion = categorias[selectCategory].questoes[selectQuestion]

                    message.channel.send("Qual será o premio deste evento?").then(msg => {
                        const filter = msg => msg.author.id
                        const premioCollect = message.channel.createMessageCollector(filter, {max: 1})
    
                        premioCollect.on('collect', async p => {
                            let premio = p.content

                            message.channel.send(new Discord.RichEmbed()
                                .setTitle(`🤓 Quiz! - ${selectedCategory}`)
                                .setDescription("Corra acerte em primeiro para ganhar o premio!")
                                .addField("Pergunta:", selectedQuestion.pergunta)
                                .addField("Premio:", premio)
                                .setColor("#6699FF")
                                .setFooter(`Cisla © - Responsavel pelo evento: ${message.author.username}.`)
                                .setTimestamp(new Date())
                            ).then(async msg => {
                                message.author.send("A resposta é: " + selectedQuestion.resposta)
                                message.channel.send("@everyone").then(ever => ever.delete(500))
    
                                const filterhelper = msg => msg.content.toLowerCase().includes(`${selectedQuestion.resposta}`)
                                const collected = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 60*1000*60});
                        
    
                                collected.on('collect', async c => {
                                    message.channel.send(new Discord.RichEmbed()
                                        .setDescription("🏅 O evento foi encerrado, e já temos um vencedor!")
                                        .addField("O vencedor foi...", `🎉 ${c.author}! A resposta era: ${selectedQuestion.resposta}`)
                                        .setColor("#6699FF")
                                        .setFooter(`Cisla © - Responsavel pelo evento: ${message.author.username}.`)
                                        .setTimestamp(new Date())
                                    )
                                })
                            })
                    
                        });
                    });
                break;
            }
        
        });
    });
}