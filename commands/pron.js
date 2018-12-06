const Discord = require ("discord.js");
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    if(args[0] == "help"){
        message.channel.send("```"+"Usage: ==lewdneko"+"```")
        return;
      }
    if (!message.channel.nsfw) return message.channel.send(message.author + " nah do this in a nsfw channel if you want this changed, let SUmof1#8580 know");

    var subreddits = [
        'FreshGIF',
        'NSFW_GIF',
        'HighResNSFW',
        'blowjobs',
        'hentai_gif'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setFooter("why my pp hard")
                .setImage(url);
            message.channel.send({
                embed
            });
        })
}

module.exports.help = {
  name: "=rporntai"
}
