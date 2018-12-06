const Discord = require ("discord.js");
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    if(args[0] == "help"){
        message.channel.send("```"+"Description: shitpost \nUsage: ==shitpost"+"```")
        return;
      }
    if (!message.channel.nsfw) return message.channel.send(message.author + " nah do this in a nsfw channel if you want this changed, let SUmof1#8580 know");

    var subreddits = [
        'shitpost',
        'The_Donald',
        'thanosdidnothingwrong'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setFooter("hMmMMMMmmmM")
                .setImage(url);
            message.channel.send({
                embed
            });
        })
}

module.exports.help = {
  name: "=shitpost"
}
