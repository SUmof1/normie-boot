const Discord = require("discord.js");
const prefix = "=="
module.exports.run = async (bot, message, args) => {
  const ayargs = message.content.substring(prefix.length).split(' ');
message.delete();
ayargs.shift()
let msg = args.slice(2).join(' ')
message.channel.createWebhook(args[0], args[1])
    .then(wb => {
      const user = new Discord.WebhookClient(wb.id, wb.token)
        user.send(msg)
        user.delete()
    })
    .catch(console.error);
}
module.exports.help = {
  name: "=make"
}
