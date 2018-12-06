const qrcode = require("qrcode");
const tempy = require("tempy");

module.exports.run = async (bot, message, args) => {
    if(args[0] == "help"){
        message.channel.send("```"+"Description: generate a qr code which you can scan to get the input \nUsage: ==qr this"+"```")
        return;
      }
try {
    const qrOutput = tempy.file({ extension: "png" });
    if (args.length > 0) {
        qrcode.toFile(qrOutput, args.join(" "), { margin: 1 }, (error) => {
            if (error) throw new Error(error);
            message.channel.stopTyping();
            message.channel.send({
                files: [{
                    attachment: qrOutput,
                    name: "qr.png"
                }]
            });
        });
    }else{
        message.reply("what text do you want turned into qr code");
    }
} catch(e) {
  message.channel.send("not enough permissons for me to send the message");
}
}
module.exports.help = {
  name: "=qr"
}
