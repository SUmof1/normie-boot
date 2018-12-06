const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"You will have to get this command setup for you"+"```")
    return;
  }
  if (!message.channel.permissionsFor(bot.user).has("ADMINISTRATOR")) return message.channel.send("I\'m missing permissions for me to work you need to give me the permission `ADMINISTRATOR`");
  let colors = message.guild.roles.filter(role => role.hasPermission("SEND_TTS_MESSAGES"));
  if(colors.size < 1) return message.channel.send("no roles");

  let str = args.join(" ");
  let role = colors.find(role => role.name.toLowerCase() === str.toLowerCase());

  if(!role) return message.channel.send("fuq? don't see that role");

  try {
    await message.member.addRole(role);
    let rems = [`so I gave <@${message.author.id}> ${role}, lmao this nigga eating 🅱eans`, `having ${role} means you're fucking gay LMFAO GOT EM`, `done.`, `gave you ${role},go away`, `"==aDdROLe ${args}" yOu sOUnD lIke a FUCking reTArd`];
    let rrems = Math.floor((Math.random() * rems.length));
    message.channel.send(rems[rrems]);
  } catch(e) {
    message.channel.send("nein");
  }
}
module.exports.help = {
  name: "=role"
}
