const Discord = require('discord.js');
const weather = require('weather-js');

module.exports.run = (bot, message, args) => {
    if(args[0] == "help"){
        message.channel.send("```"+"Description: get the weather for a location \nUsage: ==weather manhattan new york"+"```")
        return;
      }
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.send('enter a locaiton')
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
      .setAuthor(`Weather for **${current.observationpoint}**`)
          .setDescription(`**${current.skytext}**`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField('Timezone',`UTC${location.timezone}`, true)
          .addField('Degree Type',location.degreetype, true)
          .addField('Temperature',`${current.temperature} Degrees`, true)
          .addField('Actual Feel', `${current.feelslike} Degrees`, true)
          .addField('Winds ',current.winddisplay, true)
          .addField('Humidity', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}
module.exports.help = {
    name: "=weather"
}
