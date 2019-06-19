const Discord = require("discord.js")
exports.run = (client, message, args) => {
if (!message.member.hasPermission('ADMINISTRATOR ')) return;
    let msg = args.join(" ");
    message.delete();
    message.channel.send(msg);
}