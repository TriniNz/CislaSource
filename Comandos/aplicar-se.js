exports.run = async (Discord, client, message, args, db) => {

    message.channel.send(new Discord.RichEmbed()
        .setAuthor("Formularios!")
        .setDescription("Nosso formulario atualizado é [este](https://docs.google.com/forms/d/e/1FAIpQLSewdIkGk_O6TG4yqkgVkIWlglUoODm9cxv1aWeodsyWQFJr4Q/viewform).")
        .setFooter("Cisla ©")
        .setTimestamp(new Date())
        .setColor("#6699FF")
    ).then(msg => {msg.delete(15*1000); message.delete(15*1000)})
}
    /*var time = Date().split(/ +/g);

    let hpergunta1 = "Qual o seu nome?"
    let hpergunta2 = "Qual seu username in-game?"
    let hpergunta3 = "Qual a sua data de nascimento e idade?"
    let hpergunta4 = "Você joga minecraft há quanto tempo?"
    let hpergunta5 = "Quais são suas principais ocupações fora de game?"
    let hpergunta6 = "Você pode dedicar quanto tempo ao servidor e suporte no discord?"
    let hpergunta7 = "Por que devemos confiar e escolher você?"
    let hpergunta8 = "Você joga algum outro jogo online? Se sim, fale um pouco sobre."
    let hpergunta9 = "Qual suas intenções ao entrar na equipe do servidor?"
    let hpergunta10 = "Você possui alguma experiência em outros servidores? Se sim, fale um pouco sobre."
    let hpergunta11 = "Possui um microfone em boa condição para chamadas online?"
    let hpergunta12 = "Sinta-se livre para dizer algo sobre você. Caso tenha algum detalhe especial sobre você ou queria demonstrar a sua capacidade, detalhe o máximo possível."

    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//
    
    let hpergunta13 = "Descreva o hack Reach"
    let hpergunta14 = "Descreva o hack Velocity"
    let hpergunta15 = "Descreva o hack Kill-aura"
    let hpergunta16 = "Descreva o hack Aimbot"
    let hpergunta17 = "Descreva o hack TriggerBot"
    let hpergunta18 = "Descreva o hack TpAura"
    let hpergunta19 = "Descreva o hack Derp"
    let hpergunta20 = "Descreva o hack Retard"
    let hpergunta21 = "Descreva o hack BowAimbot"
    let hpergunta22 = "Descreva o hack NoSlowDown"
    let hpergunta23 = "Fale sobre Ghosts Clientes no qual você conhece (Cite 8 exemplos)"
    let hpergunta24 = "Fale sobre Clientes no qual você conhece (Cite 8 exemplos)"
    let hpergunta25 = "Fale sobre Macros/Auto Clicker no qual você conhece (Cite 8 exemplos)"
    let hpergunta26 = "Fale sobre Java Edit e suas strings no qual você conhece (Cite 5 exemplos de ambos)"
    let hpergunta27 = "Fale sobre programas para a detecção de hack no qual você conhece (Cite 5 exemplos)"
    let hpergunta28 = "Quais strings e de quais Ghost Clientes você conhece?"

    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//


    let hresposta1 = " "
    let hresposta2 = " "
    let hresposta3 = " "
    let hresposta4 = " "
    let hresposta5 = " "
    let hresposta6 = " "
    let hresposta7 = " "
    let hresposta8 = " "
    let hresposta9 = " "
    let hresposta10 = " "
    let hresposta11 = " "
    let hresposta12 = " "
    let hresposta14 = " "
    let hresposta13 = " "
    let hresposta15 = " "
    let hresposta16 = " "
    let hresposta17 = " "
    let hresposta18 = " "
    let hresposta19 = " "
    let hresposta20 = " "
    let hresposta21 = " "
    let hresposta22 = " "
    let hresposta23 = " "
    let hresposta24 = " "
    let hresposta25 = " "
    let hresposta26 = " "
    let hresposta27 = " "
    let hresposta28 = " "

    let e = new Discord.RichEmbed()
        .setAuthor("Formularios.", message.author.displayAvatarURL)
        .setDescription( message.author + " estou lhe enviando os formularios no privado.")
        .setFooter("Cisla ©")
        .setTimestamp(new Date())
        .setColor("#6699FF")
    message.channel.send(e).then(msg => msg.delete(15*1000))

    let e1 = new Discord.RichEmbed()
        .setAuthor("Formularios.", message.author.displayAvatarURL)
        .setDescription("Olá, para começar será necessario escolher qual formulario você deseja fazer. No momento, temos dois disponiveis:\n\n • Ajudante\n • GC\n\n *Para fazer a seleção basta digita-lo. Você terá de 1 a 5 minutos para responder cada pergunta.*")
        .setFooter("Cisla ©")
        .setTimestamp(new Date())
        .setColor("#6699FF")
    await message.author.send(e1).then(msg => {
        
        
        const filterhelper = msg => msg.content.toLowerCase().includes("ajudante")
        const collectorhelper = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 60*1000});

        collectorhelper.on('collect', async p => {
            let e = new Discord.RichEmbed()
                .setAuthor("Formularios.", message.author.displayAvatarURL)
                .setDescription(`**Pergunta 1**.\n${hpergunta1}\n**Sua resposta**:\n -`)
                .setFooter("Cisla ©")
                .setTimestamp(new Date())
                .setColor("#6699FF")
            await message.author.send(e).then(msg1 => {

                const filterhelper = msg => msg.author.id
                const collectorhelper_dois = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});

            collectorhelper_dois.on('collect', async p => {
                hresposta1 = p.content
                
                let e1 = new Discord.RichEmbed()
                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                    .setDescription(`**Pergunta 1**.\n${hpergunta1}\n**Sua resposta**:\n ${hresposta1}`)
                    .setFooter("Cisla ©")
                    .setTimestamp(new Date())
                    .setColor("#6699FF")
                msg1.edit(e1)

                let e2 = new Discord.RichEmbed()
                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                    .setDescription(`**Pergunta 2**.\n${hpergunta2}\n**Sua resposta**:\n -`)
                    .setFooter("Cisla ©")
                    .setTimestamp(new Date())
                    .setColor("#6699FF")
                await message.author.send(e2).then(msg2 => {

                    const collectorhelper_três = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});

                collectorhelper_três.on('collect', async p => {
                        hresposta2 = p.content

                    let e3 = new Discord.RichEmbed()
                        .setAuthor("Formularios.", message.author.displayAvatarURL)
                        .setDescription(`**Pergunta 2**.\n${hpergunta2}\n**Sua resposta**:\n${hresposta2}`)
                        .setFooter("Cisla ©")
                        .setTimestamp(new Date())
                        .setColor("#6699FF")
                    msg2.edit(e3)

                    let e4 = new Discord.RichEmbed()
                        .setAuthor("Formularios.", message.author.displayAvatarURL)
                        .setDescription(`**Pergunta 3**.\n${hpergunta3}\n**Sua resposta**:\n -`)
                        .setFooter("Cisla ©")
                        .setTimestamp(new Date())
                        .setColor("#6699FF")
                    await message.author.send(e4).then(msg3 => {

                        const collectorhelper_quatro = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});

                    collectorhelper_quatro.on('collect', async p => {
                            hresposta3 = p.content

                        let e5 = new Discord.RichEmbed()
                            .setAuthor("Formularios.", message.author.displayAvatarURL)
                            .setDescription(`**Pergunta 3**.\n${hpergunta3}\n**Sua resposta**:\n${hresposta3}`)
                            .setFooter("Cisla ©")
                            .setTimestamp(new Date())
                            .setColor("#6699FF")
                        msg3.edit(e5)

                        let e6 = new Discord.RichEmbed()
                            .setAuthor("Formularios.", message.author.displayAvatarURL)
                            .setDescription(`**Pergunta 4**.\n${hpergunta4}\n**Sua resposta**:\n -`)
                            .setFooter("Cisla ©")
                            .setTimestamp(new Date())
                            .setColor("#6699FF")
                        await message.author.send(e6).then(msg4 => {

                            const collectorhelper_cinco = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});

                        collectorhelper_cinco.on('collect', async p => {
                                hresposta4 = p.content

                            let e7 = new Discord.RichEmbed()
                                .setAuthor("Formularios.", message.author.displayAvatarURL)
                                .setDescription(`**Pergunta 4**.\n${hpergunta4}\n**Sua resposta**:\n${hresposta4}`)
                                .setFooter("Cisla ©")
                                .setTimestamp(new Date())
                                .setColor("#6699FF")
                            msg4.edit(e7)

                            let e8 = new Discord.RichEmbed()
                                .setAuthor("Formularios.", message.author.displayAvatarURL)
                                .setDescription(`**Pergunta 5**.\n${hpergunta5}\n**Sua resposta**:\n -`)
                                .setFooter("Cisla ©")
                                .setTimestamp(new Date())
                                .setColor("#6699FF")
                            await message.author.send(e8).then(msg5 => {
                                    
                                const collectorhelper_seis = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});

                            collectorhelper_seis.on('collect', async p => {
                                    hresposta5 = p.content

                                let e8 = new Discord.RichEmbed()
                                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                                    .setDescription(`**Pergunta 5**.\n${hpergunta5}\n**Sua resposta**:\n${hresposta5}`)
                                    .setFooter("Cisla ©")
                                    .setTimestamp(new Date())
                                    .setColor("#6699FF")
                                msg5.edit(e8)

                                let e9 = new Discord.RichEmbed()
                                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                                    .setDescription(`**Pergunta 6**.\n${hpergunta6}\n**Sua resposta**:\n -`)
                                    .setFooter("Cisla ©")
                                    .setTimestamp(new Date())
                                    .setColor("#6699FF")
                                await message.author.send(e9).then(msg6 => {
                                    
                                    const collectorhelper_sete = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
    
                                collectorhelper_sete.on('collect', async p => {
                                        hresposta6 = p.content
    
                                    let e10 = new Discord.RichEmbed()
                                        .setAuthor("Formularios.", message.author.displayAvatarURL)
                                        .setDescription(`**Pergunta 6**.\n${hpergunta6}\n**Sua resposta**:\n${hresposta6}`)
                                        .setFooter("Cisla ©")
                                        .setTimestamp(new Date())
                                        .setColor("#6699FF")
                                    msg6.edit(e10)
    
                                    let e11 = new Discord.RichEmbed()
                                        .setAuthor("Formularios.", message.author.displayAvatarURL)
                                        .setDescription(`**Pergunta 7**.\n${hpergunta7}\n**Sua resposta**:\n -`)
                                        .setFooter("Cisla ©")
                                        .setTimestamp(new Date())
                                        .setColor("#6699FF")
                                    await message.author.send(e11).then(msg7 => {
                                    
                                        const collectorhelper_oito = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
        
                                    collectorhelper_oito.on('collect', async p => {
                                            hresposta7 = p.content
        
                                        let e12 = new Discord.RichEmbed()
                                            .setAuthor("Formularios.", message.author.displayAvatarURL)
                                            .setDescription(`**Pergunta 7**.\n${hpergunta7}\n**Sua resposta**:\n${hresposta7}`)
                                            .setFooter("Cisla ©")
                                            .setTimestamp(new Date())
                                            .setColor("#6699FF")
                                        msg7.edit(e12)
        
                                        let e13 = new Discord.RichEmbed()
                                            .setAuthor("Formularios.", message.author.displayAvatarURL)
                                            .setDescription(`**Pergunta 8**.\n${hpergunta8}\n**Sua resposta**:\n -`)
                                            .setFooter("Cisla ©")
                                            .setTimestamp(new Date())
                                            .setColor("#6699FF")
                                        await message.author.send(e13).then(msg8 => {
                                    
                                            const collectorhelper_nove = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
            
                                        collectorhelper_nove.on('collect', async p => {
                                                hresposta8 = p.content
            
                                            let e14 = new Discord.RichEmbed()
                                                .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                .setDescription(`**Pergunta 8**.\n${hpergunta8}\n**Sua resposta**:\n${hresposta8}`)
                                                .setFooter("Cisla ©")
                                                .setTimestamp(new Date())
                                                .setColor("#6699FF")
                                            msg8.edit(e14)
            
                                            let e15 = new Discord.RichEmbed()
                                                .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                .setDescription(`**Pergunta 9**.\n${hpergunta9}\n**Sua resposta**:\n -`)
                                                .setFooter("Cisla ©")
                                                .setTimestamp(new Date())
                                                .setColor("#6699FF")
                                            await message.author.send(e15).then(msg9 => {
                                    
                                                const collectorhelper_dez = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
                
                                            collectorhelper_dez.on('collect', async p => {
                                                    hresposta9 = p.content
                
                                                let e16 = new Discord.RichEmbed()
                                                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                    .setDescription(`**Pergunta 9**.\n${hpergunta9}\n**Sua resposta**:\n${hresposta9}`)
                                                    .setFooter("Cisla ©")
                                                    .setTimestamp(new Date())
                                                    .setColor("#6699FF")
                                                msg9.edit(e16)
                
                                                let e17 = new Discord.RichEmbed()
                                                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                    .setDescription(`**Pergunta 10**.\n${hpergunta10}\n**Sua resposta**:\n -`)
                                                    .setFooter("Cisla ©")
                                                    .setTimestamp(new Date())
                                                    .setColor("#6699FF")
                                                await message.author.send(e17).then(msg10 => {
                                    
                                                    const collectorhelper_dez = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
                    
                                                collectorhelper_dez.on('collect', async p => {
                                                        hresposta10 = p.content
                    
                                                    let e18 = new Discord.RichEmbed()
                                                        .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                        .setDescription(`**Pergunta 10**.\n${hpergunta10}\n**Sua resposta**:\n${hresposta10}`)
                                                        .setFooter("Cisla ©")
                                                        .setTimestamp(new Date())
                                                        .setColor("#6699FF")
                                                    msg10.edit(e18)
                    
                                                    let e19 = new Discord.RichEmbed()
                                                        .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                        .setDescription(`**Pergunta 11**.\n${hpergunta11}\n**Sua resposta**:\n -`)
                                                        .setFooter("Cisla ©")
                                                        .setTimestamp(new Date())
                                                        .setColor("#6699FF")
                                                    await message.author.send(e19).then(msg11 => {
                                    
                                                        const collectorhelper_onze = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
                        
                                                    collectorhelper_onze.on('collect', async p => {
                                                            hresposta11 = p.content
                        
                                                        let e18 = new Discord.RichEmbed()
                                                            .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                            .setDescription(`**Pergunta 11**.\n${hpergunta11}\n**Sua resposta**:\n${hresposta11}`)
                                                            .setFooter("Cisla ©")
                                                            .setTimestamp(new Date())
                                                            .setColor("#6699FF")
                                                        msg11.edit(e18)
                        
                                                        let e19 = new Discord.RichEmbed()
                                                            .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                            .setDescription(`**Pergunta 12**.\n${hpergunta12}\n**Sua resposta**:\n -`)
                                                            .setFooter("Cisla ©")
                                                            .setTimestamp(new Date())
                                                            .setColor("#6699FF")
                                                        await message.author.send(e19).then(msg11 => {
                                    
                                                            const collectorhelper_onze = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
                            
                                                        collectorhelper_onze.on('collect', async p => {
                                                                hresposta12 = p.content
                            
                                                            let e20 = new Discord.RichEmbed()
                                                                .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                .setDescription(`**Pergunta 12**.\n${hpergunta12}\n**Sua resposta**:\n${hresposta12}`)
                                                                .setFooter("Cisla ©")
                                                                .setTimestamp(new Date())
                                                                .setColor("#6699FF")
                                                            msg11.edit(e20)
                            
                                                            let e21 = new Discord.RichEmbed()
                                                                .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                .setDescription(`Você terminou seu formulario. Revise-o para ter certeza de que respondeu todas as perguntas corretamente.`)
                                                                .addField("**1**. " + hpergunta1,"*R*: " +  hresposta1)
                                                                .addField("**2**. " + hpergunta2,"*R*: " + hresposta2)
                                                                .addField("**3**. " + hpergunta3,"*R*: " + hresposta3)
                                                                .addField("**4**. " + hpergunta4,"*R*: " + hresposta4)
                                                                .addField("**5**. " + hpergunta5,"*R*: " + hresposta5)
                                                                .addField("**6**. " + hpergunta6,"*R*: " + hresposta6)
                                                                .addField("**7**. " + hpergunta7,"*R*: " + hresposta7)
                                                                .addField("**8**. " + hpergunta8,"*R*: " + hresposta8)
                                                                .addField("**9**. " + hpergunta9,"*R*: " + hresposta9)
                                                                .addField("**10**. " + hpergunta10,"*R*: " + hresposta10)
                                                                .addField("**11**. " + hpergunta11,"*R*: " + hresposta11)
                                                                .addField("**12**. " + hpergunta12,"*R*: " + hresposta12)
                                                                .addField("⠀⠀","*Caso deseje envia-lo reaja com*: 📫\n*Para deleta-lo, reaja com*: ✖")
                                                                .setFooter("Cisla © • Formularios.")
                                                                .setTimestamp(new Date())
                                                                .setColor("#6699FF")
                                                            message.author.send(e21).then(async MessageFinish => {
                                                                

                                                                await MessageFinish.react('📫')
                                                                await MessageFinish.react('✖')

                                                                const Enviar = (reaction, user) => reaction.emoji.name === '📫' && user.id === message.author.id;
                                                                const collectreactEnviar = MessageFinish.createReactionCollector(Enviar, { max: 1, time: 30*1000 });

                                                                const Deletar = (reaction, user) => reaction.emoji.name === '✖' && user.id === message.author.id;
                                                                const collectreactDeletar = MessageFinish.createReactionCollector(Deletar, { max: 1, time: 30*1000 });

                                                                collectreactEnviar.on('collect', async r => {
                                                                    
                                                                    let SendChannel =  new Discord.RichEmbed()
                                                                        .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                        .setDescription(`Há um novo formulario para **AJUDANTE**`)
                                                                        .addField("**1**. " + hpergunta1,"*R*: " +  hresposta1)
                                                                        .addField("**2**. " + hpergunta2,"*R*: " + hresposta2)
                                                                        .addField("**3**. " + hpergunta3,"*R*: " + hresposta3)
                                                                        .addField("**4**. " + hpergunta4,"*R*: " + hresposta4)
                                                                        .addField("**5**. " + hpergunta5,"*R*: " + hresposta5)
                                                                        .addField("**6**. " + hpergunta6,"*R*: " + hresposta6)
                                                                        .addField("**7**. " + hpergunta7,"*R*: " + hresposta7)
                                                                        .addField("**8**. " + hpergunta8,"*R*: " + hresposta8)
                                                                        .addField("**9**. " + hpergunta9,"*R*: " + hresposta9)
                                                                        .addField("**10**. " + hpergunta10,"*R*: " + hresposta10)
                                                                        .addField("**11**. " + hpergunta11,"*R*: " + hresposta11)
                                                                        .addField("**12**. " + hpergunta12,"*R*: " + hresposta12)
                                                                        .addField("⠀⠀",`Autor: ${message.author}\n *• Reaja com ✅ para aceitar este formulario, ou ❎ para nega-lo. Apenas reaja se tiver certeza que este membro será adicionado.*`)
                                                                        .setFooter("Cisla © • Formularios.")
                                                                        .setTimestamp(new Date())
                                                                        .setColor("#6699FF")
                                                                    client.guilds.get("602679739777417256").channels.get("602901921841414164").send(SendChannel).then(async msg => {

                                                                        await msg.react('✅')
                                                                        await msg.react('❎')
                                                                        
                                                                        db.get("Formularios").push({
                                                                            Usuario: `${message.author.username}`,
                                                                            Id: `${message.author.id}`,
                                                                            Data: `${time[2]} de ${time[1]}, ${time[3]}, ás ${time[4]}`,
                                                                            MessageID: msg.id,
                                                                            Formtype: "Ajudante",
                                                                            Formulario: [
                                                                                `${hresposta1}`,
                                                                                `${hresposta2}`,
                                                                                `${hresposta3}`,
                                                                                `${hresposta4}`,
                                                                                `${hresposta5}`,
                                                                                `${hresposta6}`,
                                                                                `${hresposta7}`,
                                                                                `${hresposta8}`,
                                                                                `${hresposta9}`,
                                                                                `${hresposta10}`,
                                                                                `${hresposta11}`,
                                                                                `${hresposta12}`
                                                                            ]
                                                                        }).write()
                                                                    });

                                                                    let SendForm = new Discord.RichEmbed()
                                                                        .setDescription("Seu formulario foi enviado com sucesso!")
                                                                        .setFooter("Cisla © • Formularios.")
                                                                        .setTimestamp(new Date())
                                                                        .setColor("#6699FF")
                                                                    message.author.send(SendForm)

                                                                    
                                                                });

                                                                collectreactDeletar.on('collect', async r => {
                                                                    let EmbedDeleteForm = new Discord.RichEmbed()
                                                                        .setDescription("Seu formulario foi deletado com sucesso.")
                                                                        .setFooter("Cisla © • Formularios.")
                                                                        .setTimestamp(new Date())
                                                                        .setColor("#6699FF")
                                                                    await MessageFinish.edit(EmbedDeleteForm)
                                                                });
                                                            });
                                                        });
                                                        });
                                                    });
                                                    });
                                                });
                                                });
                                            });
                                            });
                                        });
                                        });
                                    });
                                    });
                                });
                                });
                            });
                            });
                        });
                        });
                    });
                    });
                });
                });
            });
            });
        });

        const filtergc = msg => msg.content.toLowerCase().includes("gc")
        const collectorgc = msg.channel.createMessageCollector(filtergc, {max: 1, time: 30*1000});

        collectorgc.on('collect', async p => {
            let e = new Discord.RichEmbed()
                .setAuthor("Formularios.", message.author.displayAvatarURL)
                .setDescription(`**Pergunta 1**.\n${hpergunta1}\n**Sua resposta**:\n -`)
                .setFooter("Cisla ©")
                .setTimestamp(new Date())
                .setColor("#6699FF")
            await message.author.send(e).then(msg1 => {

                const filterhelper = msg => msg.author.id
                const collectorhelper_dois = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});

            collectorhelper_dois.on('collect', async p => {
                hresposta1 = p.content
                
                let e1 = new Discord.RichEmbed()
                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                    .setDescription(`**Pergunta 1**.\n${hpergunta1}\n**Sua resposta**:\n ${hresposta1}`)
                    .setFooter("Cisla ©")
                    .setTimestamp(new Date())
                    .setColor("#6699FF")
                msg1.edit(e1)

                let e2 = new Discord.RichEmbed()
                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                    .setDescription(`**Pergunta 2**.\n${hpergunta2}\n**Sua resposta**:\n -`)
                    .setFooter("Cisla ©")
                    .setTimestamp(new Date())
                    .setColor("#6699FF")
                await message.author.send(e2).then(msg2 => {

                    const collectorhelper_três = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});

                collectorhelper_três.on('collect', async p => {
                        hresposta2 = p.content

                    let e3 = new Discord.RichEmbed()
                        .setAuthor("Formularios.", message.author.displayAvatarURL)
                        .setDescription(`**Pergunta 2**.\n${hpergunta2}\n**Sua resposta**:\n${hresposta2}`)
                        .setFooter("Cisla ©")
                        .setTimestamp(new Date())
                        .setColor("#6699FF")
                    msg2.edit(e3)

                    let e4 = new Discord.RichEmbed()
                        .setAuthor("Formularios.", message.author.displayAvatarURL)
                        .setDescription(`**Pergunta 3**.\n${hpergunta3}\n**Sua resposta**:\n -`)
                        .setFooter("Cisla ©")
                        .setTimestamp(new Date())
                        .setColor("#6699FF")
                    await message.author.send(e4).then(msg3 => {

                        const collectorhelper_quatro = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});

                    collectorhelper_quatro.on('collect', async p => {
                            hresposta3 = p.content

                        let e5 = new Discord.RichEmbed()
                            .setAuthor("Formularios.", message.author.displayAvatarURL)
                            .setDescription(`**Pergunta 3**.\n${hpergunta3}\n**Sua resposta**:\n${hresposta3}`)
                            .setFooter("Cisla ©")
                            .setTimestamp(new Date())
                            .setColor("#6699FF")
                        msg3.edit(e5)

                        let e6 = new Discord.RichEmbed()
                            .setAuthor("Formularios.", message.author.displayAvatarURL)
                            .setDescription(`**Pergunta 4**.\n${hpergunta4}\n**Sua resposta**:\n -`)
                            .setFooter("Cisla ©")
                            .setTimestamp(new Date())
                            .setColor("#6699FF")
                        await message.author.send(e6).then(msg4 => {

                            const collectorhelper_cinco = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});

                        collectorhelper_cinco.on('collect', async p => {
                                hresposta4 = p.content

                            let e7 = new Discord.RichEmbed()
                                .setAuthor("Formularios.", message.author.displayAvatarURL)
                                .setDescription(`**Pergunta 4**.\n${hpergunta4}\n**Sua resposta**:\n${hresposta4}`)
                                .setFooter("Cisla ©")
                                .setTimestamp(new Date())
                                .setColor("#6699FF")
                            msg4.edit(e7)

                            let e8 = new Discord.RichEmbed()
                                .setAuthor("Formularios.", message.author.displayAvatarURL)
                                .setDescription(`**Pergunta 5**.\n${hpergunta5}\n**Sua resposta**:\n -`)
                                .setFooter("Cisla ©")
                                .setTimestamp(new Date())
                                .setColor("#6699FF")
                            await message.author.send(e8).then(msg5 => {
                                    
                                const collectorhelper_seis = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});

                            collectorhelper_seis.on('collect', async p => {
                                    hresposta5 = p.content

                                let e8 = new Discord.RichEmbed()
                                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                                    .setDescription(`**Pergunta 5**.\n${hpergunta5}\n**Sua resposta**:\n${hresposta5}`)
                                    .setFooter("Cisla ©")
                                    .setTimestamp(new Date())
                                    .setColor("#6699FF")
                                msg5.edit(e8)

                                let e9 = new Discord.RichEmbed()
                                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                                    .setDescription(`**Pergunta 6**.\n${hpergunta6}\n**Sua resposta**:\n -`)
                                    .setFooter("Cisla ©")
                                    .setTimestamp(new Date())
                                    .setColor("#6699FF")
                                await message.author.send(e9).then(msg6 => {
                                    
                                    const collectorhelper_sete = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
    
                                collectorhelper_sete.on('collect', async p => {
                                        hresposta6 = p.content
    
                                    let e10 = new Discord.RichEmbed()
                                        .setAuthor("Formularios.", message.author.displayAvatarURL)
                                        .setDescription(`**Pergunta 6**.\n${hpergunta6}\n**Sua resposta**:\n${hresposta6}`)
                                        .setFooter("Cisla ©")
                                        .setTimestamp(new Date())
                                        .setColor("#6699FF")
                                    msg6.edit(e10)
    
                                    let e11 = new Discord.RichEmbed()
                                        .setAuthor("Formularios.", message.author.displayAvatarURL)
                                        .setDescription(`**Pergunta 7**.\n${hpergunta7}\n**Sua resposta**:\n -`)
                                        .setFooter("Cisla ©")
                                        .setTimestamp(new Date())
                                        .setColor("#6699FF")
                                    await message.author.send(e11).then(msg7 => {
                                    
                                        const collectorhelper_oito = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
        
                                    collectorhelper_oito.on('collect', async p => {
                                            hresposta7 = p.content
        
                                        let e12 = new Discord.RichEmbed()
                                            .setAuthor("Formularios.", message.author.displayAvatarURL)
                                            .setDescription(`**Pergunta 7**.\n${hpergunta7}\n**Sua resposta**:\n${hresposta7}`)
                                            .setFooter("Cisla ©")
                                            .setTimestamp(new Date())
                                            .setColor("#6699FF")
                                        msg7.edit(e12)
        
                                        let e13 = new Discord.RichEmbed()
                                            .setAuthor("Formularios.", message.author.displayAvatarURL)
                                            .setDescription(`**Pergunta 8**.\n${hpergunta8}\n**Sua resposta**:\n -`)
                                            .setFooter("Cisla ©")
                                            .setTimestamp(new Date())
                                            .setColor("#6699FF")
                                        await message.author.send(e13).then(msg8 => {
                                    
                                            const collectorhelper_nove = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
            
                                        collectorhelper_nove.on('collect', async p => {
                                                hresposta8 = p.content
            
                                            let e14 = new Discord.RichEmbed()
                                                .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                .setDescription(`**Pergunta 8**.\n${hpergunta8}\n**Sua resposta**:\n${hresposta8}`)
                                                .setFooter("Cisla ©")
                                                .setTimestamp(new Date())
                                                .setColor("#6699FF")
                                            msg8.edit(e14)
            
                                            let e15 = new Discord.RichEmbed()
                                                .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                .setDescription(`**Pergunta 9**.\n${hpergunta9}\n**Sua resposta**:\n -`)
                                                .setFooter("Cisla ©")
                                                .setTimestamp(new Date())
                                                .setColor("#6699FF")
                                            await message.author.send(e15).then(msg9 => {
                                    
                                                const collectorhelper_dez = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
                
                                            collectorhelper_dez.on('collect', async p => {
                                                    hresposta9 = p.content
                
                                                let e16 = new Discord.RichEmbed()
                                                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                    .setDescription(`**Pergunta 9**.\n${hpergunta9}\n**Sua resposta**:\n${hresposta9}`)
                                                    .setFooter("Cisla ©")
                                                    .setTimestamp(new Date())
                                                    .setColor("#6699FF")
                                                msg9.edit(e16)
                
                                                let e17 = new Discord.RichEmbed()
                                                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                    .setDescription(`**Pergunta 10**.\n${hpergunta10}\n**Sua resposta**:\n -`)
                                                    .setFooter("Cisla ©")
                                                    .setTimestamp(new Date())
                                                    .setColor("#6699FF")
                                                await message.author.send(e17).then(msg10 => {
                                    
                                                    const collectorhelper_dez = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
                    
                                                collectorhelper_dez.on('collect', async p => {
                                                        hresposta10 = p.content
                    
                                                    let e18 = new Discord.RichEmbed()
                                                        .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                        .setDescription(`**Pergunta 10**.\n${hpergunta10}\n**Sua resposta**:\n${hresposta10}`)
                                                        .setFooter("Cisla ©")
                                                        .setTimestamp(new Date())
                                                        .setColor("#6699FF")
                                                    msg10.edit(e18)
                    
                                                    let e19 = new Discord.RichEmbed()
                                                        .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                        .setDescription(`**Pergunta 11**.\n${hpergunta11}\n**Sua resposta**:\n -`)
                                                        .setFooter("Cisla ©")
                                                        .setTimestamp(new Date())
                                                        .setColor("#6699FF")
                                                    await message.author.send(e19).then(msg11 => {
                                    
                                                        const collectorhelper_onze = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
                        
                                                    collectorhelper_onze.on('collect', async p => {
                                                            hresposta11 = p.content
                        
                                                        let e18 = new Discord.RichEmbed()
                                                            .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                            .setDescription(`**Pergunta 11**.\n${hpergunta11}\n**Sua resposta**:\n${hresposta11}`)
                                                            .setFooter("Cisla ©")
                                                            .setTimestamp(new Date())
                                                            .setColor("#6699FF")
                                                        msg11.edit(e18)
                        
                                                        let e19 = new Discord.RichEmbed()
                                                            .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                            .setDescription(`**Pergunta 12**.\n${hpergunta12}\n**Sua resposta**:\n -`)
                                                            .setFooter("Cisla ©")
                                                            .setTimestamp(new Date())
                                                            .setColor("#6699FF")
                                                        await message.author.send(e19).then(msg11 => {
                                    
                                                            const collectorhelper_onze = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
                            
                                                        collectorhelper_onze.on('collect', async p => {
                                                                hresposta12 = p.content
                            
                                                            let e20 = new Discord.RichEmbed()
                                                                .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                .setDescription(`**Pergunta 12**.\n${hpergunta12}\n**Sua resposta**:\n${hresposta12}`)
                                                                .setFooter("Cisla ©")
                                                                .setTimestamp(new Date())
                                                                .setColor("#6699FF")
                                                            msg11.edit(e20)

                                                            let e21 = new Discord.RichEmbed()
                                                                .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                .setDescription(`**Pergunta 13**.\n${hpergunta13}\n**Sua resposta**:\n -`)
                                                                .setFooter("Cisla ©")
                                                                .setTimestamp(new Date())
                                                                .setColor("#6699FF")
                                                            await message.author.send(e21).then(msg12 => {

                                                                const collectorhelper_doze = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});

                                                            collectorhelper_doze.on('collect', async p => {
                                                                    hresposta13 = p.content

                                                                let e22 = new Discord.RichEmbed()
                                                                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                    .setDescription(`**Pergunta 13**.\n${hpergunta13}\n**Sua resposta**:\n ${hresposta13}`)
                                                                    .setFooter("Cisla ©")
                                                                    .setTimestamp(new Date())
                                                                    .setColor("#6699FF")
                                                                msg12.edit(e22)

                                                                let e23 = new Discord.RichEmbed()
                                                                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                    .setDescription(`**Pergunta 14**.\n${hpergunta14}\n**Sua resposta**:\n -`)
                                                                    .setFooter("Cisla ©")
                                                                    .setTimestamp(new Date())
                                                                    .setColor("#6699FF")
                                                                await message.author.send(e23).then(msg13 => {
                                                                    
                                                                    const collectorhelper_treze = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});

                                                                collectorhelper_treze.on('collect', async p => {

                                                                    hresposta14 = p.content

                                                                let e24 = new Discord.RichEmbed()
                                                                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                    .setDescription(`**Pergunta 14**.\n${hpergunta14}\n**Sua resposta**:\n ${hresposta14}`)
                                                                    .setFooter("Cisla ©")
                                                                    .setTimestamp(new Date())
                                                                    .setColor("#6699FF")
                                                                msg13.edit(e24)

                                                                let e25 = new Discord.RichEmbed()
                                                                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                    .setDescription(`**Pergunta 15**.\n${hpergunta15}\n**Sua resposta**:\n -`)
                                                                    .setFooter("Cisla ©")
                                                                    .setTimestamp(new Date())
                                                                    .setColor("#6699FF")
                                                                await message.author.send(e25).then(msg14 => {
                                                                    
                                                                    const collectorhelper_quatorze = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});

                                                                    collectorhelper_quatorze.on('collect', async p => {

                                                                        hresposta15 = p.content

                                                                    let e24 = new Discord.RichEmbed()
                                                                        .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                        .setDescription(`**Pergunta 15**.\n${hpergunta15}\n**Sua resposta**:\n ${hresposta15}`)
                                                                        .setFooter("Cisla ©")
                                                                        .setTimestamp(new Date())
                                                                        .setColor("#6699FF")
                                                                    msg14.edit(e24)

                                                                    let e25 = new Discord.RichEmbed()
                                                                        .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                        .setDescription(`**Pergunta 16**.\n${hpergunta16}\n**Sua resposta**:\n -`)
                                                                        .setFooter("Cisla ©")
                                                                        .setTimestamp(new Date())
                                                                        .setColor("#6699FF")
                                                                    await message.author.send(e25).then(msg15 => {
                                                                    
                                                                        const collectorhelper_dezeseis = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
    
                                                                        collectorhelper_dezeseis.on('collect', async p => {
    
                                                                            hresposta16 = p.content
    
                                                                        let e24 = new Discord.RichEmbed()
                                                                            .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                            .setDescription(`**Pergunta 16**.\n${hpergunta16}\n**Sua resposta**:\n ${hresposta16}`)
                                                                            .setFooter("Cisla ©")
                                                                            .setTimestamp(new Date())
                                                                            .setColor("#6699FF")
                                                                        msg15.edit(e24)
    
                                                                        let e25 = new Discord.RichEmbed()
                                                                            .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                            .setDescription(`**Pergunta 17**.\n${hpergunta17}\n**Sua resposta**:\n -`)
                                                                            .setFooter("Cisla ©")
                                                                            .setTimestamp(new Date())
                                                                            .setColor("#6699FF")
                                                                        await message.author.send(e25).then(msg16 => {
                                                                    
                                                                            const collectorhelper_dezesete = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
        
                                                                            collectorhelper_dezesete.on('collect', async p => {
        
                                                                                hresposta17 = p.content
        
                                                                            let e24 = new Discord.RichEmbed()
                                                                                .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                .setDescription(`**Pergunta 17**.\n${hpergunta17}\n**Sua resposta**:\n ${hresposta17}`)
                                                                                .setFooter("Cisla ©")
                                                                                .setTimestamp(new Date())
                                                                                .setColor("#6699FF")
                                                                            msg16.edit(e24)
        
                                                                            let e25 = new Discord.RichEmbed()
                                                                                .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                .setDescription(`**Pergunta 18**.\n${hpergunta18}\n**Sua resposta**:\n -`)
                                                                                .setFooter("Cisla ©")
                                                                                .setTimestamp(new Date())
                                                                                .setColor("#6699FF")
                                                                            await message.author.send(e25).then(msg17 => {
                                                                    
                                                                                const collectorhelper_dezoito = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
            
                                                                                collectorhelper_dezoito.on('collect', async p => {
            
                                                                                    hresposta18 = p.content
            
                                                                                let e24 = new Discord.RichEmbed()
                                                                                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                    .setDescription(`**Pergunta 18**.\n${hpergunta18}\n**Sua resposta**:\n ${hresposta18}`)
                                                                                    .setFooter("Cisla ©")
                                                                                    .setTimestamp(new Date())
                                                                                    .setColor("#6699FF")
                                                                                msg17.edit(e24)
            
                                                                                let e25 = new Discord.RichEmbed()
                                                                                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                    .setDescription(`**Pergunta 19**.\n${hpergunta19}\n**Sua resposta**:\n -`)
                                                                                    .setFooter("Cisla ©")
                                                                                    .setTimestamp(new Date())
                                                                                    .setColor("#6699FF")
                                                                                await message.author.send(e25).then(msg18 => {
                                                                    
                                                                                    const collectorhelper_dezenove = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
                
                                                                                    collectorhelper_dezenove.on('collect', async p => {
                
                                                                                        hresposta19 = p.content
                
                                                                                    let e24 = new Discord.RichEmbed()
                                                                                        .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                        .setDescription(`**Pergunta 19**.\n${hpergunta19}\n**Sua resposta**:\n ${hresposta19}`)
                                                                                        .setFooter("Cisla ©")
                                                                                        .setTimestamp(new Date())
                                                                                        .setColor("#6699FF")
                                                                                    msg18.edit(e24)
                
                                                                                    let e25 = new Discord.RichEmbed()
                                                                                        .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                        .setDescription(`**Pergunta 20**.\n${hpergunta20}\n**Sua resposta**:\n -`)
                                                                                        .setFooter("Cisla ©")
                                                                                        .setTimestamp(new Date())
                                                                                        .setColor("#6699FF")
                                                                                    await message.author.send(e25).then(msg19 => {
                                                                    
                                                                                        const collectorhelper_vinte = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
                    
                                                                                        collectorhelper_vinte.on('collect', async p => {
                    
                                                                                            hresposta20 = p.content
                    
                                                                                        let e24 = new Discord.RichEmbed()
                                                                                            .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                            .setDescription(`**Pergunta 20**.\n${hpergunta20}\n**Sua resposta**:\n ${hresposta20}`)
                                                                                            .setFooter("Cisla ©")
                                                                                            .setTimestamp(new Date())
                                                                                            .setColor("#6699FF")
                                                                                        msg19.edit(e24)
                    
                                                                                        let e25 = new Discord.RichEmbed()
                                                                                            .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                            .setDescription(`**Pergunta 21**.\n${hpergunta21}\n**Sua resposta**:\n -`)
                                                                                            .setFooter("Cisla ©")
                                                                                            .setTimestamp(new Date())
                                                                                            .setColor("#6699FF")
                                                                                        await message.author.send(e25).then(msg20 => {
                                                                    
                                                                                            const collectorhelper_vinteeum = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
                        
                                                                                            collectorhelper_vinteeum.on('collect', async p => {
                        
                                                                                                hresposta21 = p.content
                        
                                                                                            let e24 = new Discord.RichEmbed()
                                                                                                .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                                .setDescription(`**Pergunta 21**.\n${hpergunta21}\n**Sua resposta**:\n ${hresposta21}`)
                                                                                                .setFooter("Cisla ©")
                                                                                                .setTimestamp(new Date())
                                                                                                .setColor("#6699FF")
                                                                                            msg20.edit(e24)
                        
                                                                                            let e25 = new Discord.RichEmbed()
                                                                                                .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                                .setDescription(`**Pergunta 22**.\n${hpergunta22}\n**Sua resposta**:\n -`)
                                                                                                .setFooter("Cisla ©")
                                                                                                .setTimestamp(new Date())
                                                                                                .setColor("#6699FF")
                                                                                            await message.author.send(e25).then(msg21 => {
                                                                    
                                                                                                const collectorhelper_vinteedois = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
                            
                                                                                                collectorhelper_vinteedois.on('collect', async p => {
                            
                                                                                                    hresposta22 = p.content
                            
                                                                                                let e24 = new Discord.RichEmbed()
                                                                                                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                                    .setDescription(`**Pergunta 22**.\n${hpergunta22}\n**Sua resposta**:\n ${hresposta22}`)
                                                                                                    .setFooter("Cisla ©")
                                                                                                    .setTimestamp(new Date())
                                                                                                    .setColor("#6699FF")
                                                                                                msg21.edit(e24)
                            
                                                                                                let e25 = new Discord.RichEmbed()
                                                                                                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                                    .setDescription(`**Pergunta 23**.\n${hpergunta23}\n**Sua resposta**:\n -`)
                                                                                                    .setFooter("Cisla ©")
                                                                                                    .setTimestamp(new Date())
                                                                                                    .setColor("#6699FF")
                                                                                                await message.author.send(e25).then(msg22 => {
                                                                    
                                                                                                    const collectorhelper_vinteetres = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
                                
                                                                                                    collectorhelper_vinteetres.on('collect', async p => {
                                
                                                                                                        hresposta23 = p.content
                                
                                                                                                    let e24 = new Discord.RichEmbed()
                                                                                                        .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                                        .setDescription(`**Pergunta 23**.\n${hpergunta23}\n**Sua resposta**:\n ${hresposta23}`)
                                                                                                        .setFooter("Cisla ©")
                                                                                                        .setTimestamp(new Date())
                                                                                                        .setColor("#6699FF")
                                                                                                    msg22.edit(e24)
                                
                                                                                                    let e25 = new Discord.RichEmbed()
                                                                                                        .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                                        .setDescription(`**Pergunta 24**.\n${hpergunta24}\n**Sua resposta**:\n -`)
                                                                                                        .setFooter("Cisla ©")
                                                                                                        .setTimestamp(new Date())
                                                                                                        .setColor("#6699FF")
                                                                                                    await message.author.send(e25).then(msg23 => {
                                                                    
                                                                                                        const collectorhelper_vinteequatro = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
                                    
                                                                                                        collectorhelper_vinteequatro.on('collect', async p => {
                                    
                                                                                                            hresposta24 = p.content
                                    
                                                                                                        let e24 = new Discord.RichEmbed()
                                                                                                            .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                                            .setDescription(`**Pergunta 24**.\n${hpergunta24}\n**Sua resposta**:\n ${hresposta24}`)
                                                                                                            .setFooter("Cisla ©")
                                                                                                            .setTimestamp(new Date())
                                                                                                            .setColor("#6699FF")
                                                                                                        msg23.edit(e24)
                                    
                                                                                                        let e25 = new Discord.RichEmbed()
                                                                                                            .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                                            .setDescription(`**Pergunta 25**.\n${hpergunta25}\n**Sua resposta**:\n -`)
                                                                                                            .setFooter("Cisla ©")
                                                                                                            .setTimestamp(new Date())
                                                                                                            .setColor("#6699FF")
                                                                                                        await message.author.send(e25).then(msg24 => {
                                                                    
                                                                                                        const collectorhelper_viteecinco = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
                                    
                                                                                                        collectorhelper_viteecinco.on('collect', async p => {
                                    
                                                                                                            hresposta24 = p.content
                                    
                                                                                                        let e24 = new Discord.RichEmbed()
                                                                                                            .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                                            .setDescription(`**Pergunta 25**.\n${hpergunta25}\n**Sua resposta**:\n ${hresposta25}`)
                                                                                                            .setFooter("Cisla ©")
                                                                                                            .setTimestamp(new Date())
                                                                                                            .setColor("#6699FF")
                                                                                                        msg24.edit(e24)
                                    
                                                                                                        let e25 = new Discord.RichEmbed()
                                                                                                            .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                                            .setDescription(`**Pergunta 25**.\n${hpergunta25}\n**Sua resposta**:\n -`)
                                                                                                            .setFooter("Cisla ©")
                                                                                                            .setTimestamp(new Date())
                                                                                                            .setColor("#6699FF")
                                                                                                        await message.author.send(e25).then(msg25 => {
                                                                    
                                                                                                            const collectorhelper_vinteeseis = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
                                        
                                                                                                            collectorhelper_vinteeseis.on('collect', async p => {
                                        
                                                                                                                hresposta25 = p.content
                                        
                                                                                                            let e24 = new Discord.RichEmbed()
                                                                                                                .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                                                .setDescription(`**Pergunta 25**.\n${hpergunta25}\n**Sua resposta**:\n ${hresposta25}`)
                                                                                                                .setFooter("Cisla ©")
                                                                                                                .setTimestamp(new Date())
                                                                                                                .setColor("#6699FF")
                                                                                                            msg25.edit(e24)
                                        
                                                                                                            let e25 = new Discord.RichEmbed()
                                                                                                                .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                                                .setDescription(`**Pergunta 26**.\n${hpergunta26}\n**Sua resposta**:\n -`)
                                                                                                                .setFooter("Cisla ©")
                                                                                                                .setTimestamp(new Date())
                                                                                                                .setColor("#6699FF")
                                                                                                            await message.author.send(e25).then(msg25 => {
                                                                    
                                                                                                                const collectorhelper_vinteesete = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
                                            
                                                                                                                collectorhelper_vinteesete.on('collect', async p => {
                                            
                                                                                                                    hresposta26 = p.content
                                            
                                                                                                                let e24 = new Discord.RichEmbed()
                                                                                                                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                                                    .setDescription(`**Pergunta 26**.\n${hpergunta26}\n**Sua resposta**:\n ${hresposta26}`)
                                                                                                                    .setFooter("Cisla ©")
                                                                                                                    .setTimestamp(new Date())
                                                                                                                    .setColor("#6699FF")
                                                                                                                msg25.edit(e24)
                                            
                                                                                                                let e25 = new Discord.RichEmbed()
                                                                                                                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                                                    .setDescription(`**Pergunta 27**.\n${hpergunta27}\n**Sua resposta**:\n -`)
                                                                                                                    .setFooter("Cisla ©")
                                                                                                                    .setTimestamp(new Date())
                                                                                                                    .setColor("#6699FF")
                                                                                                                await message.author.send(e25).then(msg26 => {
                                                                    
                                                                                                                    const collectorhelper_vinteeoito = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
                                                
                                                                                                                    collectorhelper_vinteeoito.on('collect', async p => {
                                                
                                                                                                                        hresposta27 = p.content
                                                
                                                                                                                    let e24 = new Discord.RichEmbed()
                                                                                                                        .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                                                        .setDescription(`**Pergunta 27**.\n${hpergunta27}\n**Sua resposta**:\n ${hresposta27}`)
                                                                                                                        .setFooter("Cisla ©")
                                                                                                                        .setTimestamp(new Date())
                                                                                                                        .setColor("#6699FF")
                                                                                                                    msg26.edit(e24)
                                                
                                                                                                                    let e25 = new Discord.RichEmbed()
                                                                                                                        .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                                                        .setDescription(`**Pergunta 28**.\n${hpergunta28}\n**Sua resposta**:\n -`)
                                                                                                                        .setFooter("Cisla ©")
                                                                                                                        .setTimestamp(new Date())
                                                                                                                        .setColor("#6699FF")
                                                                                                                    await message.author.send(e25).then(msg27 => {
                                                                    
                                                                                                                        const collectorhelper_dezoito = msg.channel.createMessageCollector(filterhelper, {max: 1, time: 10*1000*60});
                                                    
                                                                                                                        collectorhelper_dezoito.on('collect', async p => {
                                                    
                                                                                                                            hresposta28 = p.content
                                                    
                                                                                                                                let e24 = new Discord.RichEmbed()
                                                                                                                                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                                                                    .setDescription(`**Pergunta 28**.\n${hpergunta28}\n**Sua resposta**:\n ${hresposta28}`)
                                                                                                                                    .setFooter("Cisla ©")
                                                                                                                                    .setTimestamp(new Date())
                                                                                                                                    .setColor("#6699FF")
                                                                                                                                msg27.edit(e24)

                                                                                                                                let Embed = new Discord.RichEmbed()
                                                                                                                                    .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                                                                    .setDescription(`Você terminou seu formulario. Revise-o para ter certeza de que respondeu todas as perguntas corretamente.`)
                                                                                                                                    .addField("⠀", `**Pergunta 1**. ${hpergunta1}\n*R*: ${hresposta1}\n\n**Pergunta 2**. ${hpergunta2}\n*R*: ${hresposta2}\n\n**Pergunta 3**. ${hpergunta3}\n*R*: ${hresposta3}\n\n**Pergunta 4**. ${hpergunta4}\n*R*: ${hresposta4}\n\n**Pergunta 5**. ${hpergunta5}\n*R*: ${hresposta5}\n\n**Pergunta 6**. ${hpergunta6}\n*R*: ${hresposta6}\n\n**Pergunta 7**. ${hpergunta7}\n*R*:${hresposta7}\n\n**Pergunta 8**. ${hpergunta8}\n*R*: ${hresposta8}\n\n**Pergunta 9**. ${hpergunta9}\n*R*:${hresposta9}\n\n**Pergunta 10**. ${hpergunta10}\n*R*: ${hresposta10}`)
                                                                                                                                    .addField("⠀", `**Pergunta 11**. ${hpergunta11}\n*R*: ${hresposta11}\n\n**Pergunta 12**. ${hpergunta12}\n*R*: ${hresposta12}\n\n**Pergunta 13**. ${hpergunta13}\n*R*: ${hresposta13}\n\n**Pergunta 14**. ${hpergunta14}\n*R*: ${hresposta14}\n\n**Pergunta 15**. ${hpergunta15}\n*R*: ${hresposta15}\n\n**Pergunta 16**. ${hpergunta16}\n*R*: ${hresposta16}\n\n**Pergunta 17**. ${hpergunta17}\n*R*: ${hresposta17}\n\n**Pergunta 18**. ${hpergunta18}\n*R*: ${hresposta18}\n\n**Pergunta 19**. ${hpergunta20}\n*R*: ${hresposta20}\n\n**Pergunta 2**. ${hpergunta20}\n*R*: ${hresposta2}`)
                                                                                                                                    .addField("⠀", `**Pergunta 1**. ${hpergunta1}\n*R*: ${hresposta1}\n\n**Pergunta 21**. ${hpergunta21}\n*R*: ${hresposta21}\n\n**Pergunta 22**. ${hpergunta22}\n*R*: ${hresposta22}\n\n**Pergunta 23**. ${hpergunta23}\n*R*: ${hresposta23}\n\n**Pergunta 24**. ${hpergunta24}\n*R*: ${hresposta24}\n\n**Pergunta 25**. ${hpergunta25}\n*R*: ${hresposta25}\n\n**Pergunta 26**. ${hpergunta26}\n*R*: ${hresposta26}\n\n**Pergunta 27**. ${hpergunta27}\n*R*: ${hresposta27}\n\n**Pergunta 28**. ${hpergunta28}\n*R*: ${hresposta28}`)
                                                                                                                                    .addField("⠀⠀","*Caso deseje envia-lo reaja com*: 📫\n*Para deleta-lo, reaja com*: ✖")
                                                                                                                                    .setFooter("Cisla © • Formularios.")
                                                                                                                                    .setTimestamp(new Date())
                                                                                                                                    .setColor("#6699FF")
                                                                                                                                message.author.send(Embed).then(async MessageFinish => {
                                                                

                                                                                                                                    await MessageFinish.react('📫')
                                                                                                                                    await MessageFinish.react('✖')
                                                                    
                                                                                                                                    const Enviar = (reaction, user) => reaction.emoji.name === '📫' && user.id === message.author.id;
                                                                                                                                    const collectreactEnviar = MessageFinish.createReactionCollector(Enviar, { max: 1, time: 30*1000 });
                                                                    
                                                                                                                                    const Deletar = (reaction, user) => reaction.emoji.name === '✖' && user.id === message.author.id;
                                                                                                                                    const collectreactDeletar = MessageFinish.createReactionCollector(Deletar, { max: 1, time: 30*1000 });
                                                                    
                                                                                                                                    collectreactEnviar.on('collect', async r => {
                                                                                                                                        
                                                                                                                                        let SendChannel =  new Discord.RichEmbed()
                                                                                                                                            .setAuthor("Formularios.", message.author.displayAvatarURL)
                                                                                                                                            .setDescription(`Há um novo formulario para **GC**`)
                                                                                                                                            .addField("⠀", `**Pergunta 1**. ${hpergunta1}\n*R*: ${hresposta1}\n\n**Pergunta 2**. ${hpergunta2}\n*R*: ${hresposta2}\n\n**Pergunta 3**. ${hpergunta3}\n*R*: ${hresposta3}\n\n**Pergunta 4**. ${hpergunta4}\n*R*: ${hresposta4}\n\n**Pergunta 5**. ${hpergunta5}\n*R*: ${hresposta5}\n\n**Pergunta 6**. ${hpergunta6}\n*R*: ${hresposta6}\n\n**Pergunta 7**. ${hpergunta7}\n*R*:${hresposta7}\n\n**Pergunta 8**. ${hpergunta8}\n*R*: ${hresposta8}\n\n**Pergunta 9**. ${hpergunta9}\n*R*:${hresposta9}\n\n**Pergunta 10**. ${hpergunta10}\n*R*: ${hresposta10}`)
                                                                                                                                            .addField("⠀", `**Pergunta 11**. ${hpergunta11}\n*R*: ${hresposta11}\n\n**Pergunta 12**. ${hpergunta12}\n*R*: ${hresposta12}\n\n**Pergunta 13**. ${hpergunta13}\n*R*: ${hresposta13}\n\n**Pergunta 14**. ${hpergunta14}\n*R*: ${hresposta14}\n\n**Pergunta 15**. ${hpergunta15}\n*R*: ${hresposta15}\n\n**Pergunta 16**. ${hpergunta16}\n*R*: ${hresposta16}\n\n**Pergunta 17**. ${hpergunta17}\n*R*: ${hresposta17}\n\n**Pergunta 18**. ${hpergunta18}\n*R*: ${hresposta18}\n\n**Pergunta 19**. ${hpergunta20}\n*R*: ${hresposta20}\n\n**Pergunta 2**. ${hpergunta20}\n*R*: ${hresposta2}`)
                                                                                                                                            .addField("⠀", `**Pergunta 1**. ${hpergunta1}\n*R*: ${hresposta1}\n\n**Pergunta 21**. ${hpergunta21}\n*R*: ${hresposta21}\n\n**Pergunta 22**. ${hpergunta22}\n*R*: ${hresposta22}\n\n**Pergunta 23**. ${hpergunta23}\n*R*: ${hresposta23}\n\n**Pergunta 24**. ${hpergunta24}\n*R*: ${hresposta24}\n\n**Pergunta 25**. ${hpergunta25}\n*R*: ${hresposta25}\n\n**Pergunta 26**. ${hpergunta26}\n*R*: ${hresposta26}\n\n**Pergunta 27**. ${hpergunta27}\n*R*: ${hresposta27}\n\n**Pergunta 28**. ${hpergunta28}\n*R*: ${hresposta28}`)
                                                                                                                                            .addField("⠀⠀",`Autor: ${message.author}\n *• Reaja com ✅ para aceitar este formulario, ou ❎ para nega-lo. Apenas reaja se tiver certeza que este membro será adicionado.*`)
                                                                                                                                            .setFooter("Cisla © • Formularios.")
                                                                                                                                            .setTimestamp(new Date())
                                                                                                                                            .setColor("#6699FF")
                                                                                                                                        client.guilds.get("602679739777417256").channels.get("603685392943808513").send(SendChannel).then(async msg => {
                                                                                                                                            
                                                                                                                                            await msg.react('✅')
                                                                                                                                            await msg.react('❎')

                                                                                                                                            db.get("Formularios").push({
                                                                                                                                                Usuario: `${message.author.username}`,
                                                                                                                                                Id: `${message.author.id}`,
                                                                                                                                                Data: `${time[2]} de ${time[1]}, ${time[3]}, ás ${time[4]}`,
                                                                                                                                                MessageID: msg.id,
                                                                                                                                                Formtype: "GC-MOD",
                                                                                                                                                Formulario: [
                                                                                                                                                    `${hresposta1}`,
                                                                                                                                                    `${hresposta2}`,
                                                                                                                                                    `${hresposta3}`,
                                                                                                                                                    `${hresposta4}`,
                                                                                                                                                    `${hresposta5}`,
                                                                                                                                                    `${hresposta6}`,
                                                                                                                                                    `${hresposta7}`,
                                                                                                                                                    `${hresposta8}`,
                                                                                                                                                    `${hresposta9}`,
                                                                                                                                                    `${hresposta10}`,
                                                                                                                                                    `${hresposta11}`,
                                                                                                                                                    `${hresposta12}`,
                                                                                                                                                    `${hresposta13}`,
                                                                                                                                                    `${hresposta14}`,
                                                                                                                                                    `${hresposta13}`,
                                                                                                                                                    `${hresposta14}`,
                                                                                                                                                    `${hresposta15}`,
                                                                                                                                                    `${hresposta16}`,
                                                                                                                                                    `${hresposta17}`,
                                                                                                                                                    `${hresposta18}`,
                                                                                                                                                    `${hresposta19}`,
                                                                                                                                                    `${hresposta20}`,
                                                                                                                                                    `${hresposta21}`,
                                                                                                                                                    `${hresposta22}`,
                                                                                                                                                    `${hresposta23}`,
                                                                                                                                                    `${hresposta24}`,
                                                                                                                                                    `${hresposta25}`,
                                                                                                                                                    `${hresposta26}`,
                                                                                                                                                    `${hresposta27}`,
                                                                                                                                                    `${hresposta28}`
                                                                                                                                                ]
                                                                                                                                            }).write()
                                                                                                                                        });
                                                                    
                                                                                                                                        let SendForm = new Discord.RichEmbed()
                                                                                                                                            .setDescription("Seu formulario foi enviado com sucesso!")
                                                                                                                                            .setFooter("Cisla © • Formularios.")
                                                                                                                                            .setTimestamp(new Date())
                                                                                                                                            .setColor("#6699FF")
                                                                                                                                        message.author.send(SendForm)
                                                                    
                                                                                                                                        
                                                                                                                                    });
                                                                    
                                                                                                                                    collectreactDeletar.on('collect', async r => {
                                                                                                                                        let EmbedDeleteForm = new Discord.RichEmbed()
                                                                                                                                            .setDescription("Seu formulario foi deletado com sucesso.")
                                                                                                                                            .setFooter("Cisla © • Formularios.")
                                                                                                                                            .setTimestamp(new Date())
                                                                                                                                            .setColor("#6699FF")
                                                                                                                                        await MessageFinish.edit(EmbedDeleteForm)
                                                                                                                                    });
                                                                                                                                });
                                                                                                                            });    
                                                                                                                            });
                                                                                                                        });    
                                                                                                                        });
                                                                                                                    });    
                                                                                                                    });
                                                                                                                });    
                                                                                                                });
                                                                                                            });    
                                                                                                            });
                                                                                                        });
                                                                                                        });
                                                                                                    });
                                                                                                    });
                                                                                                });
                                                                                                });
                                                                                            });
                                                                                            });
                                                                                        });
                                                                                        });
                                                                                    });
                                                                                    });
                                                                                });
                                                                                });
                                                                            });
                                                                            });
                                                                        });
                                                                        });
                                                                    });
                                                                    });
                                                                });
                                                                });
                                                            });
                                                            });
                                                        });
                                                        });
                                                    });
                                                    });
                                                });
                                                });
                                            });
                                            });
                                        });
                                        });
                                    });
                                    });
                                });
                                });
                            });
                            });
                        });
                        });
                    });
                    });
                });
                });
            });
            });
        });
    })*/
