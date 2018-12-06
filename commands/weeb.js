const Discord = require("discord.js");
const malScraper = require('mal-scraper');


                            //try client if bot not working
module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: search MAL for an anime \nUsage: ==weeb one punch man"+"```")
    return;
  }
  const search = `${args}`;

  malScraper.getInfoFromName(search)
    .then((data) => {
        if(!data) return message.channel.send("nothing found");
    const malEmbed = new Discord.RichEmbed()
      .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
      .setThumbnail(data.picture)
      .setColor("RANDOM") 
      .addField('Eng Title', data.englishTitle, true)
      .addField('Jap Title', data.japaneseTitle, true)
      .addField('Type', data.type, true)
      .addField('Episodes', data.episodes, true)
      .addField('R8ing', data.rating, true)
      .addField('Aired', data.aired, true)
      .addField('Score', data.score, true)
      .addField('Score Stats', data.scoreStats, true)
      .addField('Link', data.url);

      message.channel.send(malEmbed);

      //console.log(data);
    })
    .catch((err) => console.log(err));

}

module.exports.help = {
  name: "=weeb"
}