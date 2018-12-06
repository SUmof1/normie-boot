const Discord = require("discord.js");
const moment = require("moment");


module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: userinfo \nUsage: ==whomst @user (or just ==whomst to get info on your acc)"+"```");
    return;
  }

let user = message.mentions.users.first() || message.author;

  const member = message.guild.member(user);

  const uembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(user.displayAvatarURL)
  .setTitle(`${user.username}#${user.discriminator}`)
  .addField("Nickname", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
  .addField("Bot?", `${user.bot}`, true)
  .addField("Acc created at", user.createdAt)
  .addField(user.username + " is gay?", "true")
  .addField("Status", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
  .addField("Joined server on", member.joinedAt)
  .addField("Roles", member.roles.map(roles => `${roles.name}`).join(', '), true)
  .setFooter("Hi, your mom is gay");
  message.channel.send(uembed);

}

module.exports.help = {
  name: "=whomst"
}
