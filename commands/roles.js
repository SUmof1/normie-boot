const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"You will have to get this setup for you"+"```")
    return;
  }
    let tags = message.guild.roles.filter(role => role.hasPermission("SEND_TTS_MESSAGES"));
    if(tags.size < 1) return message.channel.send("there are no assignable roles in this server");

    message.channel.send("some roles that you can choose from: " + `\n\n${tags.array().join(" ")}` + "\n\n write the name of the role role you want, e.g. ==addrole e" + "\n not case sensitive");
}
module.exports.help = {
  name: "=roles"
}
