const Discord = require("discord.js");
const google = require("google");


module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.channel.send("```"+"Description: search google \nUsage: ==google big tiddy bot gf"+"```")
    return;
  }
  if (!message.channel.nsfw) return message.channel.send(message.author + "some sites can show nsfw content, use this in a nsfw channel");
  google.resultsPerPage = 1
  google.protocol = 'https'
  var nextCounter = 0

  google(args, function (err, res) {
    if (err) console.log(err);

    for (var i = 0; i < res.links.length; ++i) {
      var link = res.links[i];

      message.channel.send(link.title + " " + link.href);
    }

    if (nextCounter < 1) {
      nextCounter += 1
      if (res.next) res.next()
    }

  });


}

module.exports.help = {
  name: "=google"
}
