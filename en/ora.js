const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let gifs = [
        "https://media.tenor.com/images/1f2375abdff4d5624d56a7141a47272e/tenor.gif",
      "https://media.tenor.com/images/95fadce08619136ec90dc820aaf405a1/tenor.gif",// valerian
    ]
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡¡ORA ORA ORA ORA!!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
}    