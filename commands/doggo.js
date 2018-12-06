const Discord = require ("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: random dog img \nUsage: ==dog"+"```")
    return;
  }

  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let dogembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("look its your mom")
  .setImage(body.url);

  message.channel.send(dogembed);


}

module.exports.help = {
  name: "=dog"
}
