const Discord = require("discord.js")
exports.run = (client, message, args) => {
  message.author.setNickname("owo");
  message.channel.send("Nick Cambiado: v3");
}
