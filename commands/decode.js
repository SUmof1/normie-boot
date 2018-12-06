const Discord = require("discord.js");
const base64 = require("js-base64").Base64;

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: decodes a base64 message \nUsage: ==decode bG9sIHlvdXIgbW9tIGdheQ=="+"```")
    return;
  }
    const b64Decoded = base64.decode(args.join(" "));
    message.channel.send(`\`\`\`\n${b64Decoded}\`\`\``);
}

module.exports.help = {
  name: "=decode"
}
