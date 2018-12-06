const Discord = require("discord.js");
const client = new Discord.Client();
const meme = require('memejs');

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Usage: ==meme"+"```")
    return;
  }

  meme(function(data) {
    const membed = new Discord.RichEmbed()
    .setTitle(data.title[0])
    .setColor("RANDOM")
    .setImage(data.url[0]);

    message.channel.send(membed);
  });
}

module.exports.help = {
  name: "=meme"
}
