const Discord = require("discord.js");
const urban = require("urban");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: search urban disctionary for a word \nUsage: ==urban pizza"+"```")
    return;
  }
  if(args.length < 1) return message.channel.send("Enter a word.");
  let str = args.join(" ");

  urban(str).first(json => {
    if(!json) return message.channel.send("could not not find that shiz");
     let urembed = new Discord.RichEmbed()
     .setTitle(json.word)
     .setDescription(json.definition)
     .addField("Example", json.example, true)
     .setColor("RANDOM")
     .addField("Upvotes", json.thumbs_up, true)
     .addField("Downvotes", json.thumbs_down, true)
     .setFooter(`Submitted by ${json.author}`);

     message.channel.send(urembed);
  })
}

module.exports.help = {
  name: "=urban"
}
