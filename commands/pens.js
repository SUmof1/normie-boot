const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

  let replies = ["pp: 8=D", "pp: 8D", "pp: 8===================================D", "Error, I did not detect anything.", "pp: 8====D", "pp: 8=========D", "pp: 8============D", "pp: 8=============D", "Code 69 detected - Inverted penis: Depth = 400km", "pp: 8===D", "Code 69 detected - Inverted penis: Depth = 60000km", "Code 69 detected - Inverted penis: Depth = 0.5km", "Code 69 detected - Inverted penis: Depth = 2km", "Code 69 detected - Inverted penis: Depth = 50km"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  message.channel.send(replies[result]);

}


module.exports.help = {
  name: "penis"
}
