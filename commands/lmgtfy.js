const Discord = require("discord.js");
const encode = require("strict-uri-encode");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: make a tutorial video meme \nUsage: ==lmgtfy how to get gf"+"```")
    return;
  }

  let question = encode(args.join(" "));
  let link = `https://www.lmgtfy.com/?q=${question}`;

  message.channel.send(`<${link}>`)

}

module.exports.help = {
  name: "=lmgtfy"
}
