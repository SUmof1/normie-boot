const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

let guser = message.mentions.users.first() || args.join(" ") || message.author;
if(guser.id == "396386552210653195") return message.channel.send("gayn't");
let rrepps = ["100% gay", "ben level gay", "pretty gay", "50% gay", "yes homo", "straight", "a futa like alyssa, gay? idfk", "possibly the gayest", "they just broke the gaydar", "I see no end to this power"];
let repps = Math.floor((Math.random() * rrepps.length));
message.channel.send(`**gayness for ${guser}:** ` + rrepps[repps]);
}
module.exports.help = {
  name: "=gayness"
}
