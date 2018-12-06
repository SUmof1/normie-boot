const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {  
  if(args[0] == "help"){
    message.channel.send("```"+"Description: random cat img \nUsage: ==cat"+"```")
    return;
  }

  const { body } = await superagent
  .get("http://aws.random.cat/meow");
  const caembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Some pussy")
  .setImage(body.file)
  message.channel.send(caembed);

}

module.exports.help = {
  name: "=cat"
}
