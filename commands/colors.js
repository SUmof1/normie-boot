const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"You will have to get this setup for you"+"```")
    return;
  }

    let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
    if(colors.size < 1) return message.channel.send("there are no colors in this server");

    message.channel.send("the colors you can choose from: " + `\n\n${colors.array().join(" ")}` + "\n\n write the name of the color you want, e.g. ==color gay");
}
module.exports.help = {
  name: "=colors"
}
