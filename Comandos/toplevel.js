exports.run = async (Discord, client, message, args, db) => {

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
        let top4qnt = a.length - 4
        let top5qnt = a.length - 5
        let top6qnt = a.length - 6
        let top7qnt = a.length - 7
        let top8qnt = a.length - 8
        let top9qnt = a.length - 9
        let top10qnt = a.length - 10
        let top11qnt = a.length - 11
        let top12qnt = a.length - 12

        let top1search = db.get("RankSystem").find({XPcount: a[top1qnt]}).value()
        let top2search = db.get("RankSystem").find({XPcount: a[top2qnt]}).value()
        let top3search = db.get("RankSystem").find({XPcount: a[top3qnt]}).value()
        let top4search = db.get("RankSystem").find({XPcount: a[top4qnt]}).value()
        let top5search = db.get("RankSystem").find({XPcount: a[top5qnt]}).value()
        let top6search = db.get("RankSystem").find({XPcount: a[top6qnt]}).value()
        let top7search = db.get("RankSystem").find({XPcount: a[top7qnt]}).value()
        let top8search = db.get("RankSystem").find({XPcount: a[top8qnt]}).value()
        let top9search = db.get("RankSystem").find({XPcount: a[top9qnt]}).value()
        let top10search = db.get("RankSystem").find({XPcount: a[top10qnt]}).value()
        let top11search = db.get("RankSystem").find({XPcount: a[top11qnt]}).value()
        let top12search = db.get("RankSystem").find({XPcount: a[top12qnt]}).value()
                    
    let embed = new Discord.RichEmbed()
        .setAuthor("Top 12 Levels")
        .setDescription("Estes são os 12 membros que mais utilizam no servidor:")
        .addField(`[1] - ${top1search.Usuario}`,`• XP: ${top1search.XPcount}\n • Level ${top1search.Level}\n`, true)
        .addField(`[2] - ${top2search.Usuario}`,`• XP: ${top2search.XPcount}\n • Level ${top2search.Level}\n`, true)
        .addField(`[3] - ${top3search.Usuario}`,`• XP: ${top3search.XPcount}\n • Level ${top3search.Level}\n`, true)
        .addField(`[4] - ${top4search.Usuario}`,`• XP: ${top4search.XPcount}\n • Level ${top4search.Level}\n`, true)
        .addField(`[5] - ${top5search.Usuario}`,`• XP: ${top5search.XPcount}\n • Level ${top5search.Level}\n`, true)
        .addField(`[6] - ${top6search.Usuario}`,`• XP: ${top6search.XPcount}\n • Level ${top6search.Level}\n`, true)
        .addField(`[7] - ${top7search.Usuario}`,`• XP: ${top7search.XPcount}\n • Level ${top7search.Level}\n`, true)
        .addField(`[8] - ${top8search.Usuario}`,`• XP: ${top8search.XPcount}\n • Level ${top8search.Level}\n`, true)
        .addField(`[9] - ${top9search.Usuario}`,`• XP: ${top9search.XPcount}\n • Level ${top9search.Level}\n`, true)
        .addField(`[10] - ${top10search.Usuario}`,`• XP: ${top10search.XPcount}\n • Level ${top10search.Level}\n`, true)
        .addField(`[11] - ${top11search.Usuario}`,`• XP: ${top11search.XPcount}\n • Level ${top11search.Level}\n`, true)
        .addField(`[12] - ${top12search.Usuario}`,`• XP: ${top12search.XPcount}\n • Level ${top12search.Level}\n`, true)
        .setColor("#6699FF")
        .setFooter("Cisla ©")
        .setTimestamp(new Date())
    message.channel.send(embed).then(msg => msg.delete(40*1000))
        
}