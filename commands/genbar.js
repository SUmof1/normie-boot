const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if(args[0] == "help"){
        message.channel.send("```"+"Description: watch me hit a blunt \nUsage: ==weed"+"```")
        return;
      }
      if(message.author.id !== "396386552210653195") return message.channel.send("the gay");
                  return message.channel.send("ok").then(async message => {
                      setTimeout(() => {
                          message.edit('[                                   ] Generating...');
                      }, 500);
                      setTimeout(() => {
                          message.edit('[====                               ] Generating...');
                      }, 1000);
                      setTimeout(() => {
                          message.edit('[=======                            ] Connecting to Minecraft server admins...');
                      }, 2000);
                      setTimeout(() => {
                          message.edit('[============                       ] Sucking your dick...');
                      }, 3000);
                      setTimeout(() => {
                          message.edit('[===================                ] Washing jizz off my face...');
                      }, 4000);
                      setTimeout(() => {
                          message.edit('[============================       ] Finishing up');
                      }, 5000);
                      setTimeout(() => {
                          message.edit('[===================================] Done');
                      }, 6000);
                      setTimeout(() => {
                          message.edit(`done`);
                      }, 7000);
                  });
                }
module.exports.help = {
  name: "=load"
}
