const Discord = require("discord.js");
const Client = require('fortnite');
const fortnite = new Client('ae6406ff-41ee-4da8-bcf4-3d0f5b4096af');

module.exports.run = async (bot,message,args) => {
let username = args[0];
let platform = args[1] || "pc";

if(!username) return message.reply("provide a username")

let data = fortnite.user(username, platform).then(data => {
  let stats = data.stats;
  let lifetime = stats.lifetime;

  let score = lifetime[6]['Score'];
  let mplayed = lifetime[7]['Matches Played'];
  let wins = lifetime[8]['Wins'];
  let winper = lifetime[9]['Win%'];
  let kills = lifetime[10]['Kills'];
  let kd = lifetime[11]['K/d'];

  let fembed = new Discord.RichEmbed()
  .setTitle("Fortnite stats")
  .setAuthor(data.username)
  .setColor("RANDOM")
  .addField("Wins", wins, true)
  .addField("Kills", kills, true)
  .addField("Score", score, true)
  .addField("Matches Played", mplayed, true)
  .addField("Win Percentage", winper, true)
  .addField("Kill/Death Ratio", kd, true);

  message.channel.send(fembed);
});
}

module.exports.help = {
  name: "fortnite"
}
