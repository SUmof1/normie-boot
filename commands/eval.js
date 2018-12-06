const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== '396386552210653195') return message.channel.send("trying to hack me? i think not");
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Eval (raw)')
        .setColor('#000000')
        .addField('outp', `\`\`\`js\n${code}\n\`\`\``)
        .setFooter(`normie_bot.exe | Courtesy of SUmof1`, `${bot.user.displayAvatarURL}`);
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}

module.exports.help = {
    name: '=eval'
}