const Discord = require("discord.js");
const urban = require("urban");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: random urban word \nUsage: ==rurban"+"```")
    return;
  }
  urban.random().first(json => {
     let rurembed = new Discord.RichEmbed()
     .setTitle(json.word)
     .setDescription(json.definition)
     .addField("Example", json.example, true)
     .setColor("RANDOM")
     .addField("Upvotes", json.thumbs_up, true)
     .addField("Downvotes", json.thumbs_down, true)
     .setFooter(`Submitted by ${json.author}`);

     message.channel.send(rurembed);
  })
}

module.exports.help = {
  name: "=rurban"
}
