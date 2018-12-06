const Discord = require('discord.js');
const moment = require('moment');

const cooldown = new Set();
module.exports.run = async (bot, message, args) => {
    let margs = message.content.split(' ').slice(1).join(' ');
    message.delete();
    if (cooldown.has(message.author.id && message.guild.id)) {
        return message.channel.send('Support tickets have a **5 minute cooldown** this is to avoid to spam');
    }
    if (margs.length < 1) {
        return message.channel.send(`Support ticket is too small, ${message.author} please be more descriptive`);
    }
    cooldown.add(message.author.id && message.guild.id);
    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 300000);
    let guild = message.guild;
    const cnl = bot.channels.get('502583481810026527');
    message.author.send(`${message.author} your ticket was sent without any problems, you can see it below`);
    const embed2 = new Discord.RichEmbed()
        .setAuthor(`Ticket from ${message.author.tag}`, message.author.displayAvatarURL)
        .addField('Ticket:', `Author: ${message.author.tag}\nServer: ${guild.name}\nTicket: ${margs}`)
        .setThumbnail(message.author.displayAvatarURL)
        .setFooter(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
        .setColor("#000000");
    message.author.send({ embed: embed2 });
    const embed = new Discord.RichEmbed()
        .setAuthor(`Ticket from ${message.author.tag}`, message.author.displayAvatarURL)
        .addField('Ticket:', `Author: ${message.author.tag}\nServer: ${guild.name}\nFull Ticket: ${margs}`)
        .setThumbnail(message.author.displayAvatarURL)
        .setColor("#000000");
    cnl.send({ embed })
        .catch(e => logger.error(e))
    let role = message.guild.roles.find(role => role.name === "⚠️Support Requested⚠️");
        message.member.addRole(role); 
};
module.exports.help = {
  name: "=support"
}
