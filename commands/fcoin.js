const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: flip a coin \nUsage: ==fcoin"+"```")
    return;
  }

  let replies = ["flipping a coin, and... heads.", "coin flipped, and it's... tails."];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  message.channel.send(replies[result]);

}

module.exports.help = {
  name: "=fcoin"
}
