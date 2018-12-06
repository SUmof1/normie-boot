const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: mute a user for a set amount of time \nUsage: ==silence @SUmof1 5m"+"```")
    return;
  }
  if (!message.channel.permissionsFor(bot.user).has("MANAGE_GUILD")) return message.channel.send("I\'m missing permissions for me to work you need to give me the permission `MANAGE SERVER`");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply(`didnt find anyone named ${tomute}`);
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("lmao no.");
  let muterole = message.guild.roles.find(`name`, "Silenced");

// start of mutedrole
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Silenced",
        color: "#000000",
        permissions:[]
      })
      message.guild.channel.forEach(async (channel, id) => {
        await channel.overwritePermission(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: true
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  // end of it
  // end of module
}

module.exports.help = {
  name: "=silence"
}