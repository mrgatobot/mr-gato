const Discord = require("discord.js")
exports.run = (client, message, args) => {
if (!message.member.hasPermission('ADMINISTRATOR ')) return;
    let msg = args.join(" ");
    message.delete();
    let embed = new Discord.RichEmbed()
    .setDescription(msg)
    .setColor(3447003);
    message.channel.send({embed});
}