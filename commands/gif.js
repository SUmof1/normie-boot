const Discord = require("discord.js");
const gifSearch = require("gif-search");

module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if(args[0] == "help"){
    message.channel.send("```"+"Description: search for a gif \nUsage: ==gif hello"+"```")
    return;
  }

    if (!args[0]) return message.channel.send("==gif [search term]");

    gifSearch.random(args[0]).then(
        gifUrl => {
        var embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setImage(gifUrl)
        message.channel.send(embed);
    });
}
module.exports.help = {
  name: "=gif"
}
