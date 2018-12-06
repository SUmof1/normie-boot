const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(args[0] == "help"){
        message.channel.send("```"+"Description: connect and interact with all the servers ReeePost is in \nUsage: ==mail this is text"+"```")
        return;
      }
    let xoargs = message.content.split(" ").slice(1);
    let xo03 = xoargs.join(" ")
    var xo02 = message.guild.channels.filter(channel => channel.name === "reeepostglobal");
    if (!xo02) return message.reply(`the channel reeepostglobal does not exist`)
    if (message.channel.name !== 'reeepostglobal') return message.reply('this command can only be made in reeepostglobal')
    if (!xo03) return message.reply('can\'t send an empty message')
                    message.delete();
                    var tchat_embed = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setTitle("ReeePost Global")
                        .setThumbnail(`${message.author.displayAvatarURL}`)
                        .addField("Name of user:", message.author.username + "#" + message.author.discriminator, true)
                        .addField("From server", message.guild.name, true)
                        .addField("Server ID", message.guild.id, true)
                        .addField("Message:", `${xo03}`)
                        .setTimestamp();
                    bot.channels.filter(channel => channel.name === "reeepostglobal").map(channel => channel.send(tchat_embed));
}//{findAll('name', 'global').
module.exports.help = {
    name: "=mail"
}