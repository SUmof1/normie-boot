const Discord = require("discord.js");
const ownerID = '396386552210653195';


module.exports.run = async (bot, message, args) => {
    if (message.author.id !== ownerID) return message.channel.send("no");

    var error17 = new Discord.RichEmbed().setColor("990033")
        .setDescription('server id bro')
        .setColor(0xff0000)

    var error18 = new Discord.RichEmbed().setColor("990033")
        .setDescription('error occured')
        .setColor(0xff0000)

    //If tried kick bot from a main server (like for emote provider) will return error18
    if (args[0] == 475360346622787594) return message.channel.send(error18).then(message => {
        message.delete(9000)
    });

bot.guilds.filter(guild => guild.name === `${args.join(" ")}`).map(guild => guild.leave());
    message.channel.send(`left server with the name of ${args.join(" ")}`);
}
module.exports.help = {
  name: "=kickfrum"
}
