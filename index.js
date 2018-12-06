const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("commands not found");
    return;
  }

  jsfile.forEach((f, i) =>{

    let props = require(`./commands/${f}`);
    console.log(`${f} load`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`█▀▀█ █▀▀ █▀▀ █▀▀ █▀▀█ █▀▀█ █▀▀ ▀▀█▀▀`);
  console.log(`█▄▄▀ █▀▀ █▀▀ █▀▀ █░░█ █░░█ ▀▀█ ░░█░░`);
  console.log(`▀░▀▀ ▀▀▀ ▀▀▀ ▀▀▀ █▀▀▀ ▀▀▀▀ ▀▀▀ ░░▀░░`);
  console.log(`█▀▀█ █▀▀▄ █░░ ░▀░ █▀▀▄ █▀▀`);
  console.log(`█░░█ █░░█ █░░ ▀█▀ █░░█ █▀▀`);
  console.log(`▀▀▀▀ ▀░░▀ ▀▀▀ ▀▀▀ ▀░░▀ ▀▀▀`);

  let statuses = ['you are gay', 'http://srslyf.ml/', 'cyka blyat', 'tired of your shit', 'DM me for nudes ;)', 'you\'re such a fucking hoe', 'you\'re worthless', 'SUmof1#8580 is your dad', 'monster cock right here', 'dick in azz', 'gulag', "Ping = ban", "your mom", `ligma balls LMAO GOT EM`, "🅱", "can you dont", "buy me thanos car"];
  //setInterval(function() {
    let status = statuses[Math.floor(Math.random()*statuses.length)];
    bot.user.setActivity("come to father", {type: "STREAMING", url: "https://www.twitch.tv/sumof1_"});
  //}, 25000)
  //bot.user.setActivity(`ur sextape on ${bot.guilds.size} servers, ${bot.users.size} users watching it LMFAO | Ping = BAN | ==help`, {type: "STREAMING", url: "https://www.twitch.tv/sumof1_"});

});
bot.on("error", async error => {
  console.log(`something went wrong ${error}`);
});
bot.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel;
  let oldUserChannel = oldMember.voiceChannel;
  let vcrole = newMember.guild.roles.find(role => role.name === "📞 Phone Sex 📞");
  if(!vcrole) return;
  if(oldUserChannel === undefined && newUserChannel !== undefined) {
    newMember.addRole(vcrole);

  } else if(newUserChannel === undefined){
   oldMember.removeRole(vcrole);
    

  }
});
bot.on("guildCreate", async guild => {
  console.log(`joined ${guild.name}`);
  let guildCreateChannel = bot.channels.get("497141482902388746");

  let general = guild.channels.find(channel => channel.name === "general")//find('name', "general");
  if(!general) return guildCreateChannel.send(`server joined, ${guild.name}, members: ${guild.memberCount}`)
//  general.send(`ayyyy cunts waddup, I'm here to steal your memes. \nBut if you find any problems with me you go straight https://discord.gg/YF7E2t6 and tell them how much of a piece of shit I am. lol GAY AF \nbtw if I'm offline doesnt mean it'll be like that forever I will come online again uwu.`)
  guild.channels.get(general.id).createInvite().then(invite => {

    let joinEmbed = new Discord.RichEmbed()
      .setTitle('server inv link')
      .setThumbnail(guild.iconURL)
      .setURL(invite.url)
      .setDescription('joined a server')
      .addField('serv Info', `Name: **${guild.name}** members: ${guild.memberCount} and the ID of ${guild.id}`)

    guildCreateChannel.send(joinEmbed);
  });
});
bot.on('messageReactionAdd', async (reaction, user, message) => {
  const snl = bot.channels.get("508246678050963457");
  var roleObj2 = reaction.message.guild.roles.find(r => r.name === "Event");
  var roleObj3 = reaction.message.guild.roles.find(r => r.name === "Eventn't");
  var memberObj = reaction.message.guild.members.get(user.id);
  const stembed = new Discord.RichEmbed()
  .setTitle("jump to message")
  .setURL(reaction.message.url) //to get the jump to button for the message
  .setDescription(`🇪: ${reaction.count}`)
  .setColor("#0000ff")
  .addField(`${reaction.message.author.username}`, reaction.message)
  .setTimestamp();
    if(reaction.emoji.name === "🇪") {
        snl.send(stembed);
      }
    if(reaction.emoji.name === "🔴") {
      memberObj.addRole(roleObj2);
    }
    if(reaction.emoji.name === "⚪") {
      memberObj.addRole(roleObj3);
    }


});

bot.on('messageReactionRemove', async (reaction, user, message) => {
  var roleObj2 = reaction.message.guild.roles.find(r => r.name === "Event");
  var roleObj3 = reaction.message.guild.roles.find(r => r.name === "Eventn't");
  var memberObj = reaction.message.guild.members.get(user.id);

  if(reaction.emoji.name === "🔴") {
    memberObj.removeRole(roleObj2);
  }
  if(reaction.emoji.name === "⚪") {
    memberObj.removeRole(roleObj3);
  }


});

bot.on("guildDelete", async guild => {
  console.log(`left ${guild.name}`);
  let guildCreateDelete = bot.channels.get("497141482902388746");

  let leaveEmbed = new Discord.RichEmbed()
    .setTitle('server Left')
    .setThumbnail(guild.iconURL)
    .addField('serv Info', `Name: **${guild.name}**`)

  guildCreateDelete.send(leaveEmbed);
});
const serverStats = {
  guildID: '475360346622787594',
  totalUsersID: '500615825015963649',
  memberCountID: '500615953965645824'
}
bot.on("guildMemberAdd", async member => {
  //member.guild.channels.get('500293981784244235').setName(`total user count: ${member.guild.memberCount}`);
    let mims = ["https://i.redd.it/la97w3pj92y11.jpg", "https://i.redd.it/k7up6uj8i3y11.jpg", "https://i.redd.it/8sphcsgx93y11.jpg", "https://i.redd.it/15tnoy7tc0y11.jpg", "https://i.redd.it/t87898t7g3y11.jpg", "https://i.redd.it/96swe4vba3y11.jpg", "https://i.redd.it/d1786k4rh3y11.jpg"];
    let msmims = Math.floor((Math.random() * mims.length));
    let membed = new Discord.RichEmbed()
    .setImage(mims[msmims]);
    member.send(membed);
    let guild = bot.guilds.get(serverStats.guildID);

    bot.channels.get(serverStats.totalUsersID).setName(`Total cunts: ${guild.memberCount}`); // Total Members
    bot.channels.get(serverStats.memberCountID).setName(`Member cunts: ${guild.members.filter(m => !m.user.bot).size}`); // Member Count
  let welcomechannel = member.guild.channels.find(channel => channel.name === "casual");
     welcomechannel.createWebhook(member.user.username, member.user.displayAvatarURL)
    .then(wb => {
      const user = new Discord.WebhookClient(wb.id, wb.token)
      let jims = ["I have the gay", "haters will say i\'m fake", "I\'m a huge faggot", "hey what's up i\'m a faggot yeah that would be me a huge faggot", "look at me", "k", "i\'m gay", "wtf", "yoooooo me gay", "autism", "my parents don\'t love me", ".", "i should probably kill myself"];
      let sjims = Math.floor((Math.random() * jims.length));
        user.send(jims[sjims])
        user.delete()
    })
    .catch(console.error);
//arr[Math.floor(Math.random() * arr.length)]https://images-ext-1.discordapp.net/external/7bmOeHVxZSpQa_hQ3ytpVpd24T-KlzAD5WZZtF-OS1c/https/media.giphy.com/media/N1krim5mPo8Vy/giphy.gif
});
bot.on("guildMemberRemove", async member => {
  console.log(`${member.id} left the server.`);
  let guild = bot.guilds.get(serverStats.guildID);

  bot.channels.get(serverStats.totalUsersID).setName(`Total cunts: ${guild.memberCount}`); // Total Members
  bot.channels.get(serverStats.memberCountID).setName(`Member cunts: ${guild.members.filter(m => !m.user.bot).size}`); // Member Count

//  member.guild.channels.get('500293981784244235').setName(`total user count: ${member.guild.memberCount}`);
  //let levs = [`${member} BEGONE THOT`, `${member} smashed the leave button`, `this is when ${member} decided it was time for them to leave`, `${member} died`, `${member} left, may the virgin be successful in his future journeys`, `${member} left, 🇫`, `Error G4y: Could not find ${member}`, `${member} yeeted away`];
  //let rlevs = Math.floor((Math.random() * levs.length));
  //let welcomechannel = member.guild.channels.find(channel => channel.name === "casual")//filter(channel => channel.name === "welcome") || member.guild.channels.filter(channel => channel.name === "casual");
  //if(!welcomechannel) return;
  //welcomechannel.send(levs[rlevs]);
})
bot.on("message", async message => { //IF FACING PROBS REMOVE THE ASYNC IN HERE

  if(message.author.bot) return;
  if(message.channel.type === "dm") {
    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("new dm to repo")
    .addField("ID", `${message.author.id}`)
    .addField(`Sent By:`,`${message.author.username}#${message.author.discriminator}`)//<@${message.author.id}>
    .addField("Click to get acc (only if they're in this server):", `<@${message.author.id}>`)
    .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL)
    .addField("Message: ",message.content)
    .setFooter(`try contacting the nub`);

    bot.channels.get("500089656705024020").send(embed);

  }
  //if(message.guild.id !== "475360346622787594") return;
  let msg = message.content.toLowerCase();
//message.isMentioned(bot.users.get('YOUR_USER_ID'))
if(msg === "<:wheeze:500298540896223233>")
      message.channel.send("<:wheeze:500298540896223233>") 
  else if(msg === "==ping")
     message.channel.send("Pong <:yeetus:500298540896223233>")

  else if(msg === "=f")
  message.channel.send(message.author + " has officially paid respect.")

  else if(msg === "=x")
   message.channel.send(message.author + " has pressed X to doubt.")

  else if(msg === "=fuck you")
    message.react("👏")

  else if(msg === "=kek")
    message.react("❌")

  else if(msg === "=what")
    message.react("🤔")

  else if(msg === "=dead")
    message.react("💀")

  else if(msg === "=no u")
    message.react("✋")

  else if (msg.includes("=loli"))
    message.react("🍭")

  else if(msg.includes("😉"))
    message.react("😉")

  else if(msg.includes("meg/"))
    message.react(bot.emojis.get("481868154562412575"))

  else if(msg.includes("love"))
    message.react(bot.emojis.get("478267985920786432"))

  else if(msg.includes("<:doot:498232016391634954>"))
      message.react(bot.emojis.get("498232016391634954"))

});
bot.on("message", async message => {
  //const prefixMention = new RegExp(`^<@!?${bot.user.id}> `); FOR PREFIX AS MENTION REMOVE THE ${PREFI} IN EACH CMD
  //const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : '!';  
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let cont = message.content.slice(prefix.length).split(' ');

  if(cmd === `${prefix}=eve`){
    let vrole = message.guild.roles.find(role => role.name === "Event");
    message.member.addRole(vrole);
    message.channel.send("⚪ 📞 you will now get notifications for when there is a vc <:boner:505123304265351168>");
  }
  if(cmd === `${prefix}=reve`){
    let vrole = message.guild.roles.find(role => role.name === "Event");
    message.member.removeRole(vrole);
    message.channel.send("🔴 📞 you will not get notifications for when there is a vc <:noboner:505123307150901258>");
  }
  if(cmd === `${prefix}=kick`){

  //  if (!message.channel.permissionsFor(bot.user).has("ADMINISTRATOR")) return message.channel.send("I\'m missing permissions for me to work you need to give me the permission `ADMINISTRATOR`");

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("couldn't find that ni🅱🅱a");
    let kReason = args.join(" ").slice(22);
    if(!kReason) return message.channel.send("reason pls")
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have the perms LMFAO GAY");
    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("that person is a mod");

    let kembed = new Discord.RichEmbed()
    .setDescription("<:boii:478267986050940958>")
    .setColor("RANDOM")
    .addField("Whomst was kicked?", `t'was ${kUser} sire`)
    .addField("Whomst kicked?", `<@${message.author.id}>`)
    .addField("Channel kicked in", message.channel)
    .addField("REEEEEEason", kReason)
    .addField("Time kicked at", message.createdAt);

    //let kickchannel = message.guild.channels.find(channel => channel.name === "general");
    //if(!kickchannel) return message.channel.send(`${kUser} was kicked by <@${message.author.id}> for ${kReason}`);

    message.guild.member(kUser).kick(kReason);
    message.channel.send(`${kUser} was kicked by <@${message.author.id}> for ${kReason} at ${message.createdAt}`);
    //kickchannel.send(kembed);
  }
  if(cmd === `${prefix}=rename`){
    if(!args[1]) return message.channel.send("enter some text to change the name to");
    let user = message.mentions.users.first() || message.author;
    if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("no");

    message.guild.members.get(user.id).setNickname(`${args.slice(1).join(" ")}`);
    message.channel.send(`${user}\'s nickname was changed`);
  }

  if(cmd === `${prefix}=ban`){

    if (!message.channel.permissionsFor(bot.user).has("ADMINISTRATOR")) return message.channel.send("I\'m missing permissions for me to work you need to give me the permission `ADMINISTRATOR`");
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("couldn't find that ni🅱🅱a");
    let bReason = args.join(" ").slice(22);
    if(!bReason) return message.channel.send("reason pls")
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you don't have the perms LMFAO GAY");
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("that person is a mod");

    let bembed = new Discord.RichEmbed()
    .setDescription("<:boii:478267986050940958>")
    .setColor("RANDOM")
    .addField("Whomst was banned?", `t'was ${bUser} sire`)
    .addField("Whomst banned?", `<@${message.author.id}>`)
    .addField("Channel banned in", message.channel)
    .addField("REEEEEEason", bReason)
    .addField("Time banned at", message.createdAt);

    //let banchannel = message.guild.channels.find(channel => channel.name === "general");
    //if(!banchannel) return message.channel.send(`${bUser} was banned by <@${message.author.id}> for ${bReason}`);

    message.guild.member(bUser).ban(bReason);
    message.channel.send(`${bUser} was kicked by <@${message.author.id}> for ${bReason} at ${message.createdAt}` );
  }

  if(cmd === `${prefix}=serverinfo`){
   let sicon = message.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setDescription("your mom gay")
   .setThumbnail(sicon)
   .addField("Server Name", message.guild.name)
   .addField("Server ID", message.guild.id)
   .addField("Server Owner", message.guild.owner.user)
   .addField("Server Region", message.guild.region)
   .addField("Created On", message.guild.createdAt)
   .addField("You Joined", message.member.joinedAt)
   .addField("Stats", `${message.guild.roles.size} roles in this server, ${message.guild.channels.size} channels, ${message.guild.memberCount} members and ${message.guild.members.filter(member => member.user.bot).size} bots. `)
   .addField('Member Statuses', `🤢 - ${message.guild.members.filter(o => o.presence.status === 'online').size} Online\n<:yeetus:500298540896223233> - ${message.guild.members.filter(i => i.presence.status === 'idle').size} Idle\n<:sangery:475649702092603432> - ${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size} Do Not Disturb\n❔ - ${message.guild.members.filter(off => off.presence.status === 'offline').size} Offline\n🍆 - ${message.guild.members.filter(s => s.presence.status === 'streaming').size} Streaming`);
   return message.channel.send(serverembed);
 }

  if (cmd === `${prefix}=inv`) {
   let bocon = bot.user.displayAvatarURL;

  let iembed = new Discord.RichEmbed()
  .setDescription(`klik [here](https://discordapp.com/oauth2/authorize?client_id=485047945406709766&scope=bot&permissions=8) to invite me to your server bröther`)
  .setColor("RANDOM")
  .setImage(bocon)
  .setTimestamp();
  return message.channel.send(iembed);
}
 if (cmd === `${prefix}=pfp`) {
  let user = message.mentions.users.first() || message.author;

  let pfpembed = new Discord.RichEmbed()
  .setAuthor(`${user.username}`)
  .setImage(user.displayAvatarURL)
  .setColor("RANDOM");

  message.channel.send(pfpembed);

}
if (cmd === `${prefix}=botinfo`) {
let bembed = new Discord.RichEmbed()
.setTitle("Invite me to your server")
.setURL("https://discordapp.com/oauth2/authorize?client_id=485047945406709766&scope=bot&permissions=8")
.setColor("RANDOM")
.addField("Bot name", bot.user.username)
.addField("Created on", bot.user.createdAt)
.addField("Number of servers", bot.guilds.size)
.setDescription("<> with 🖤 by SUmof1#8580");
message.channel.send(bembed);
}


    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

  if (message.content.toLowerCase() === "==uping") {
    message.channel.send("you and me fuckin tonight").then(message => {
      message.edit("```"+Math.round(Math.abs((new Date().getMilliseconds()/1000+new Date().getSeconds()) - message.createdAt.getMilliseconds()/1000+message.createdAt.getSeconds())*1000 / 1000) +"ms```");
    });
  }
  if (message.content.toLowerCase() === "==sping") {
    var dk = new Date();
    message.channel.send("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee").then(message => {
      message.edit("```"+Math.round(Math.abs((new Date().getMilliseconds()/1000+new Date().getSeconds()) - (dk.getMilliseconds()/1000+dk.getSeconds()))*1000)+"ms```");
    });
  }



});
bot.login(botconfig.token);
