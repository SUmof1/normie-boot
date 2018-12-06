const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');
  if(args[0] == "help"){
    message.channel.send("```"+"Description: random caps and claps added to your text \nUsage: ==clapify meme review"+"```")
    return;
  }
    if (args.length < 1) return message.channel.send("what do you want to *clapify*")
    message.channel.send(args.map(randomizeCase).join(':clap:'));
}
module.exports.help = {
    name: "=clap"
}
