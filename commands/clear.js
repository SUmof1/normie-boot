const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
const user = message.mentions.users.first();
const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[2]) : parseInt(message.content.split(' ')[1]);
if (!amount) return message.reply('how many');
if (!amount && !user) return message.reply('mention either a user and message amount or just user, ==clear @user 10');
message.channel.fetchMessages({
  limit: amount,
}).then((messages) => {
  if (user) {
    const filterBy = user ? user.id : bot.user.id;
    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
  }
  message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
});
}
module.exports.help = {
  name: "=clear"
}
