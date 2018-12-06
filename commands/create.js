const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rrole = message.guild.roles.find(`name`, "role restricted");
  if(message.member.roles.has(rrole.id)) return message.channel.send("you are role restricted because you gay");

  try{
    crerole = await message.guild.createRole({
      name: `${args.slice(1).join(" ")}`,
      color: `${args[0]}`,
      permissions:[]
    })
  }catch(e){
    console.log(e.stack);
    message.channel.send("there was an 3rr0r, console has been logged");
  }
  message.member.addRole(crerole);
  message.channel.send("autism");

}
module.exports.help = {
  name: "=create"
}
