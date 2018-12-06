const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let slots = ["<:noboner:505123307150901258>", "<:boner:505123304265351168>", "<:wheeze:500298540896223233>"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let aicon = message.author.displayAvatarURL;

    if (slots[result1] === slots[result2] && slots[result3]) {
        let wEmbed = new Discord.RichEmbed()
            .setFooter(`${message.author.username} you won`, aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('result:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#000000");
        message.channel.send(wEmbed);
    } else {
        let embed = new Discord.RichEmbed()
            .setFooter(`${message.author.username} you lost`, aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('result', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#000000");
        message.channel.send(embed);
    }

}


module.exports.help = {
    name: '=slots'
} 
