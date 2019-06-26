const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let gifs = [
        "https://media.giphy.com/media/l0HlSYBHR78sdHZDy/giphy.gif", // stranger things
        "https://media.giphy.com/media/DURbX7oesHiaA/giphy.gif", // squeleto
        "https://media.giphy.com/media/QIXDNqdHT6aQw/giphy.gif", // bambi
        "https://media.giphy.com/media/bMLGNRoAy0Yko/giphy.gif", // chica anime
        "https://media.giphy.com/media/7nlbYoryJoV6o/giphy.gif", // full metal alchemist
        "https://media.giphy.com/media/kiOGNdQMj04SI/giphy.gif", // sakura naruto
        "https://media.giphy.com/media/FzvuJwrxc6jza/giphy.gif", // serena pokemon
        "https://media.giphy.com/media/3lBOIbP9ghX2/giphy.gif", // sailor moon
        "https://media.giphy.com/media/46zAB9s3qo7OaLjLWP/giphy.gif", // sonrojado monito
        
        ] 
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Esta sonrojado!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
}