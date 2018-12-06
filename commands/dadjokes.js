const discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {
    if(args[0] == "help"){
        message.channel.send("```"+"Description: dad joke \nUsage: ==dadjoke"+"```")
        return;
      }

	 let sa = require ("superagent");

    let {body} = await sa
    .get(`https://icanhazdadjoke.com/slack`);

    message.channel.send(body.attachments.map(a => a.text));
	
}
module.exports.help = {
    name: "=dadjoke"
}