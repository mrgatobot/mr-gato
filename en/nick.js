const Discord = require("discord.js")
exports.run = (client, message, args) => {
  message.guild.members.get(bot.user.id).setNickname("some nickname");
  message.channel.send("Nick Cambiado: v3");
}
