const Discord = require('discord.js')
module.exports.run = (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: reverse you text for no reason \nUsage: ==reverse siht"+"```")
    return;
  }
  if(!args[0]) return message.channel.send('==revere [text to reverse]');

  function reverseString(str) {
      return str.split("").reverse().join("");
  }
  let sreverse = reverseString(args.join(' '));
  if(args[0] === sreverse) {

  sreverse = `${args.join(' ')} smh you broke it`;

  }
  message.channel.send(`${sreverse}`)//{embed: reverseEmbed});

}
module.exports.help = {
  name: "=reverse"
}
