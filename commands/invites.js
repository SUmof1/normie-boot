const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: invite leaderboard (might not work since users might not cached, give this one some time) \nUsage: ==invites"+"```")
    return;
  }
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('missing perms');
    });

    invites = invites.array()
    let possibleinvites = [];
    invites.forEach(function(invites) {
        possibleinvites.push(`${invites.inviter.username} ||  ${invites.uses}`)
    })

    const embed = new Discord.RichEmbed()
        .setTitle(`inv leaderboard`)
        .setColor(0xCB5A5E)
        .addField('invites', `\`\`\`${possibleinvites.join('\n')}\`\`\``)
        .setTimestamp();
    message.channel.send(embed);
}

module.exports.help = {
    name: "=invites"
}
