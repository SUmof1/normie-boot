
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let users = bot.users;
let searchterm = args[0];
if(!searchterm) return message.channel.send("missing search term");
let matches = users.filter(u => u.tag.toLowerCase().includes(searchterm.toLowerCase()));
if(!matches) return message.channel.send("no matches found");
if(matches.size > 2000) return message.channel.send("too many users to list")
let fembed = new Discord.RichEmbed()
.setTitle(`Users who have ${args[0]} in their name`)
.setDescription(`${matches.map(u => u.tag).join("\n")}`);
message.channel.send(fembed);//`users who have ${args[0]} in their name\n` matches.map(u => u.tag));
}
module.exports.help = {
  name: "=findnames"
}
