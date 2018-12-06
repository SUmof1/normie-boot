const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

let dUser = message.guild.member(message.mentions.users.first()) || bot.users.get(args[0]);
if (!dUser) return message.channel.send("user not found")
//if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you cant use that")
let dMessage = args.join(" ").slice(22);
if(dMessage.length < 1) return message.reply("msg too short bro");

dUser.send(`${dMessage}`);

message.author.send(`${message.author} message tranfser **succ**essful your dm was sent to ${dUser}`);
}
module.exports.help = {
    name: "=dm"
}
