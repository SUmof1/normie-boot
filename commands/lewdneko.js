const superagent = require("superagent");
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: ( ͡° ͜ʖ ͡°) \nUsage: ==lewdneko"+"```")
    return;
  }
    if (!message.channel.nsfw) return message.channel.send('do this in a nsfw channel');
    superagent.get('https://nekos.life/api/v2/img/lewd')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("nyaa")
      .setImage(response.body.url)
      .setColor(`RANDOM`);
  message.channel.send(lewdembed);
});
}
module.exports.help = {
  name: "=lewdneko"
}
