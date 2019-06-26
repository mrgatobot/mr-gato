const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let gifs = [
        "https://media.giphy.com/media/deMMOL24ZOZiHdWezh/giphy.gif", // hombre traje
        "https://media.giphy.com/media/mheYSVOu2jk3K/giphy.gif", // niña
        "https://media.giphy.com/media/x48svp0jT2FMX1iRvu/giphy.gif", // niña dibujo
        "https://media.giphy.com/media/lKZEeXJGhU1d6/giphy.gif", // Minions
        "https://media.giphy.com/media/l378dQBiI5KEOCYJW/giphy.gif", // lego
        "https://media.giphy.com/media/l46Cq3kBsFJLkA3wQ/giphy.gif", // peli vieja
        "https://media.giphy.com/media/xU9TT471DTGJq/giphy.gif", // homero
        "https://media.giphy.com/media/hv0LZ2SU0672o/giphy.gif", // lisa
        "https://media.giphy.com/media/EvAsg84y6QUeY/giphy.gif", // mickey

      ] 
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**Empezo a gritar. . .**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
}    