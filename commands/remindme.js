const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: sets a reminder gor  \nUsage: ==remindme 10s steal your girl"+"```")
    return;
  }
    let reminderTime = args[0];
    if (!reminderTime) return message.channel.send("when and what do you want me to remind you about");

    let reminder = args.slice(1).join(" ");

    message.channel.send(`I will remind you to ${reminder} in ${reminderTime}`);


    setTimeout(function() {

        message.channel.send(`<@${message.author.id}> you told me to remind you to ${reminder} ${reminderTime} ago`);
    }, ms(reminderTime));
}
module.exports.help = {
  name: "=remindme"
}
