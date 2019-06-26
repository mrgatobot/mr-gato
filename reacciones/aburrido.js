const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let gifs = [
        "https://media.giphy.com/media/3o6Zt62PeJeFUDwBUI/giphy.gif", // oso girando
        "https://media.giphy.com/media/HlqvH9JrahLZ6/giphy.gif", // bob esponja clases
        "https://media.giphy.com/media/HlqvH9JrahLZ6/giphy.gif", // niño sin color
        "https://media.giphy.com/media/dT7LBdAZP1Rh6/giphy.gif", //gato sentado
        "https://media.giphy.com/media/rq6c5xD7leHW8/giphy.gif", // barbudo
        "https://media.giphy.com/media/l2JhpjWPccQhsAMfu/giphy.gif", // bob esponja
        "https://media.giphy.com/media/l378AEZceMwWboAQE/giphy.gif", // niño color
        "https://media.giphy.com/media/2fbgqwZL9YSJO/giphy.gif", // niño bostezo
        "https://media.giphy.com/media/ZgqJGwh2tLj5C/giphy.gif", // got talent
        "https://media.giphy.com/media/3orif0olmGNHtrBnXO/giphy.gif", // chica old style
        "https://media.giphy.com/media/97U9uOLWR2Bfa/giphy.gif", // chica old style paleta
        "https://media.giphy.com/media/3o85xGr7NxBC4eGTte/giphy.gif", // gato pelota
        "https://media.giphy.com/media/AboDThj3SWZLW/giphy.gif", // lisa telefono
        "https://media.giphy.com/media/MGmnFOZRFRo4w/giphy.gif", // señor sombrero
        "https://media.giphy.com/media/iLyOhTeJgFw5O/giphy.gif", // uñas
        "https://media.giphy.com/media/34ZNcoaN5u4hi/giphy.gif", // plastilina
      ] 
    
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**Esta aburrido. .**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
}   
