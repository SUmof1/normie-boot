const Discord = require('discord.js');
const quiz = [
  { q: "is ben a queer?", a: ["yes", "ye", "mhm"] },
  { q: "who has the biggest dick in this server", a: ["me", "SUmof1"] },
  { q: "who is my daddy :tongue:😩", a: ["SUmof1", "Sum", "SUmof1#8580"]},
  { q: "who is the server owner", a: ["ReeePost", "you"]},
  { q: "is this server gay?", a: ["no", "non", "nu"] }
];
const options = {
  max: 1,
  time: 30050,
  errors: ["time"],
};

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: random questions, can you answer them all? \nUsage: ==quiz"+"```")
    return;
  }

  const item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.q);
  try {
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor(`Winner: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                 .setTitle(`Correct Answer: \`${winnerMessage.content}\``)
                                 .setFooter(`Question: ${item.q}`)
                                 .setColor(message.guild.me.displayHexColor)
                                })
  } catch (_) {
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor('no one got it')
                                 .setTitle(`Correct Answer(s): \`${item.a}\``)
                                 .setFooter(`Question: ${item.q}`)
                                })
  }
}
module.exports.help = {
name: "=q"
}
