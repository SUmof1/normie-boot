const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: love % between two people \nUsage: ==lovecalc @ReeePost @SUmof1 (perfect match <3)"+"```")
    return;
  }
  if(!args[0]) return message.channel.send("tag who you want checked");
  let replies = [`${message.mentions.users.first()} is into the opposite sex to ${message.mentions.users.last()} so yeah`, "10%", "59%", "12%", "0%", "100%", "1%", "5%", "1000%", "incompatible", "∞", "99%", "70%", "99.9%"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");
  let su1 = message.guild.members.get(args[0].replace(/[<>@!?]/g, ''));
  let su2 = args[1] ? message.guild.members.get(args[1].replace(/[<>@!?]/g, '')) : message.member;
   message.channel.send(`Love Calculator results (100% accurate)\n${su1} and ${su2}\'s Compatibility = **` + replies[result] + "**");

}


module.exports.help = {
  name: "=luvcalc"
}
