const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"You will have to get this setup for you"+"```")
    return;
  }
  if (!message.channel.permissionsFor(bot.user).has("ADMINISTRATOR")) return message.channel.send("I\'m missing permissions for me to work you need to give me the permission `ADMINISTRATOR`");
  let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
  if(colors.size < 1) return message.channel.send("no roles");

  let str = args.join(" ");
  let role = colors.find(role => role.name.slice(1).toLowerCase() === str.toLowerCase());

  if(!role) return message.channel.send("um");

  try {
    await message.member.removeRoles(colors);
    await message.member.addRole(role);
    let reps = [`E`, `Ok`, `you were given ${role}, you died`, `you got ${role}`, `gave you ${role}, looks good on you. JUST KIDDING YOU'RE FUCKING FAT`, `ٴٴٴٴ`];
    let rreps = Math.floor((Math.random() * reps.length));
    message.channel.send(reps[rreps]);
  } catch(e) {
    message.channel.send(`error ${e.message}`);
  }
}
module.exports.help = {
  name: "=color"
}
