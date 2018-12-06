const Discord = require("discord.js");
const cleverbot = require("cleverbot.io");
const clever = new cleverbot("5F7YR3jiEztUYezN", "2QpyZ5qZwNFZqf1xJMdefjQGKLN3DuBT");

module.exports.run = (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: have a casual conversation with bot, typically replies within half a min \nUsage: ==r hi"+"```")
    return;
  }
    message.channel.startTyping();

    clever.setNick("ReeePost");
    clever.create(function(err, session) {
        clever.ask(args.join(' '), function(err, res) {
            message.channel.send(res);
        });
    });
    message.channel.stopTyping(true);
}
module.exports.help = {
  name: "=r"
}
