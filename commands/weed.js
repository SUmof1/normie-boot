const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if(args[0] == "help"){
        message.channel.send("```"+"Description: watch me hit a blunt \nUsage: ==weed"+"```")
        return;
      }
                  return message.channel.send("watch me hit this blunt").then(async message => {
                      setTimeout(() => {
                          message.edit('🚬');
                      }, 500);
                      setTimeout(() => {
                          message.edit('🚬 ☁ ');
                      }, 1000);
                      setTimeout(() => {
                          message.edit('🚬 ☁☁ ');
                      }, 2000);
                      setTimeout(() => {
                          message.edit('🚬 ☁☁☁ ');
                      }, 4000);
                      setTimeout(() => {
                          message.edit('🚬 ☁☁☁');
                      }, 8000);
                      setTimeout(() => {
                          message.edit('🚬 ☁☁');
                      }, 10000);
                      setTimeout(() => {
                          message.edit('🚬 ☁');
                      }, 14000);
                      setTimeout(() => {
                          message.edit(`that was a good mfing blunt`);
                      }, 19000);
                  });
                }
module.exports.help = {
  name: "=smoke"
}
