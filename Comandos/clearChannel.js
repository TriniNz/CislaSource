exports.run = async (Discord, client, message, args) => {

    if(!message.member.roles.some(r=>["Diretor","Administrador","trini"].includes(r.name))) {
        let Embed_NoRoleRequire = new Discord.RichEmbed()
            .setDescription("Seu cargo não tem permissões para fazer isso.")
            .setColor("#6699FF")
            .setFooter("Cisla ©")
            .setTimestamp(new Date())
        return message.channel.send(Embed_NoRoleRequire).then(msg => msg.delete(15*1000))
    }

    if (message.channel.type == 'text') {
        message.channel.fetchMessages().then(messages => {
           message.channel.bulkDelete(messages);
           messagesDeleted = messages.array().length; // number of messages deleted

            
           message.channel.send("Canal limpo com sucesso, no total apaguei: "+messagesDeleted).then(msg => msg.delete(15*1000))
           
        })
        .catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);
        });
    }
}
