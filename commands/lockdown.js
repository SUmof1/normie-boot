const ms = require("ms");

module.exports.run = (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: lockdown a channel for a specified amount of time, use the command in the channel you want to lockdown \nUsage: ==lock 10m, to unlock do ==lock unlock (can be seconds, minutes or hours)"+"```")
    return;
  }
  if (!message.channel.permissionsFor(bot.user).has("MANAGE_CHANNELS")) return message.channel.send("I\'m missing permissions for me to work you need to give me the permission `MANAGE CHANNELS`");

if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("you cannot you need manage channels perm");
  if (!bot.lockit) bot.lockit = [];
  let time  = args.join(" ");
  let validUnlocks = ["release", "unlock" , "rel" , "ul"];
  const perms = message.member.hasPermission("MANAGE_CHANNELS");
 if (!perms) return message.channel.send("you need to have manage channels perm lol")
  if (!time) return message.channel.send("you need to set a duration for the lockdown in hours, minutes or seconds.");

    if (message.author.id === "396386552210653195") {
message.channel.overwritePermissions(message.author, {
  SEND_MESSAGES: true
}
)}

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send("channel no longer locked down");
      clearTimeout(bot.lockit[message.channel.id]);
      delete bot.lockit[message.channel.id];
    }).catch(error => {
      message.channel.send(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }
    ).then(() => {
      message.channel.send(`channel locked down for ${ms(ms(time), { long:true })}`).then(() => {

        bot.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send("lockdown removed.")).catch(console.error);
          delete bot.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        message.channel.send(error);
      });
    });
  }
}

module.exports.help = {
  name: "=lock"
}
