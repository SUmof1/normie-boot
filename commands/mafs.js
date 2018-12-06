const Discord = require("discord.js");
const math = require("mathjs");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: answers a math problem \nUsage: ==mafs 2 + 1"+"```")
    return;
  }
  if(!args[0]) return message.channel.send("enter a calc, 4-1 = 3 quick mafs");
  let resp;
  try {
    resp = math.eval(args.join(' '));
  } catch (e) {
    return message.channel.send("idfk doesn\'t look right to me");
  }
  const membed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("quik mafs")
  .addField("Inp", `\`\`\`js\n${args.join('')}\`\`\``)
  .addField("Outp", `\`\`\`js\n${resp}\`\`\``);
  message.channel.send(membed);
}
module.exports.help = {
  name: "=mafs"
}
