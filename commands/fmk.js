const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {

    let replies = ['MARRY 💑', 'KILL 🔫', 'FUCK <:fuc:497498294537289737>'];
    let result = Math.floor(Math.random() * replies.length);
    let user = message.mentions.users.first() || message.author;
    let makifuembed = new Discord.RichEmbed()

        .setDescription(`${user} was chosen`)
        .setColor('RANDOM')
        .addField('I would ', replies[result])
        .setFooter('fuck marry kill evaluted by yours truly', bot.user.displayAvatarURL);

    if (!message.mentions.users.first()) return message.channel.send(`<@${message.author.id}> mention a user`).then(msg => {
        msg.delete(3000)
    });

    message.channel.send(makifuembed);

}
module.exports.help = {
    name: "=fmk"
}
