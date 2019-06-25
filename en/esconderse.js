const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let gifs = [
        "https://media.giphy.com/media/B37cYPCruqwwg/giphy.gif", // auto
        "https://media.giphy.com/media/COYGe9rZvfiaQ/giphy.gif", // homero
        "https://media.giphy.com/media/GHPmyOgFZjR0k/giphy.gif", // conejo
        "https://media.giphy.com/media/xT0xemn9kAM4F52NFK/giphy.gif", // cortina
        "https://media.giphy.com/media/9n5UIlRppk91e/giphy.gif", // armadillo
        "https://media.giphy.com/media/dxqOkrl29R8ac/giphy.gif", // gato sofa
        "https://media.giphy.com/media/vFuQaUkLvdcFW/giphy.gif", // pantera rosa
        "https://media.giphy.com/media/9GIFGeuuinRxgEj7Zq/giphy.gif", // gatos
        "https://media.giphy.com/media/7p7z3vxucrNCw/giphy.gif", // señor lentes
        "https://media.giphy.com/media/l0MYF44K8NgPSYwRa/giphy.gif", // stranger things
        "https://media.giphy.com/media/TKjj1uFzWfL02yals1/giphy.gif", // pollo
        "https://media.giphy.com/media/x49zkz0GOj23NfNgRr/giphy.gif", // fondo morado
        "https://media.giphy.com/media/Adqe9XUP3x9LO/giphy.gif", // oficina varios
       ] 
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Se escondio!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
}  
