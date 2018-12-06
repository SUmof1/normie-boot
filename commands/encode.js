const Discord = require("discord.js");
const base64 = require("js-base64").Base64;

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: encodes text into a base64 message \nUsage: ==encode this"+"```")
    return;
  }
    const b64Encoded = base64.encode(args.join(" "));
    message.channel.send(`\`\`\`\n${b64Encoded}\`\`\``);
}

module.exports.help = {
  name: "=encode"
}
