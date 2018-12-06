const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let string = '';
    bot.guilds.forEach(guild => {
    string += guild.name + '\n';});

    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription(`currently serving ${bot.guilds.size} servers`)
        .addField("Servers I'm in", string)
        .setTimestamp();
    message.channel.send(botembed);
}

module.exports.help = {
    name: "=servers"
}
