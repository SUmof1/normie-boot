const Discord = require('discord.js');
var figlet = require('figlet');

module.exports.run = (bot,message,args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: makes a text bigger \nUsage: ==big this"+"```")
    return;
  }
  var maxLen = 25 // You can modify the max characters here

  if(args.join(' ').length > maxLen) return message.channel.send('20 chars only')

  if(!args[0]) return message.channel.send('what do you wnat to asciify');

  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });


}
module.exports.help = {
    name: "=big"
}
