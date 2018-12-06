const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: make bot say somethign \nUsage: ==say need a gf"+"```")
    return;
  }
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);

}

module.exports.help = {
  name: "=say"
}
