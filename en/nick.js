const Discord = require("discord.js")
exports.run = (client, message, args) => {
  message.guild.members.get("493552568677433344").setNickname("Paquito");
  message.channel.send("Nick Cambiado");
}
