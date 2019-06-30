const Discord = require("discord.js")
exports.run = (client, message, args) => {
    let allowedRole = message.guild.roles.find("name", "〘👑〙Staff");
    if (message.member.roles.has(allowedRole.id) {
        // allowed access to command
        message.channel.send("Eres Staff");
    } else {
        message.channel.send("No eres Staff");
    }
}
