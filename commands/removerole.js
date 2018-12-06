const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"You will have to get this command setup for you"+"```")
    return;
  }
  if (!message.channel.permissionsFor(bot.user).has("ADMINISTRATOR")) return message.channel.send("I\'m missing permissions for me to work you need to give me the permission `ADMINISTRATOR`");
  let colors = message.guild.roles.filter(role => role.hasPermission("SEND_TTS_MESSAGES"));
  if(colors.size < 1) return message.channel.send("you do not have that role");

  let str = args.join(" ");
  let role = colors.find(role => role.name.toLowerCase() === str.toLowerCase());

  if(!role) return message.channel.send("role missing");

  try {
    await message.member.removeRole(role);
    message.channel.send("**succ**essfully removed role");
  } catch(e) {
    message.channel.send("there was an **e**rror");
  }
}
module.exports.help = {
  name: "=remove"
}
