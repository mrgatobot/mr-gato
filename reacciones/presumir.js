const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let gifs = [
          "https://media.giphy.com/media/dYdrcYcidefPzFSYJd/giphy.gif", // peter rabbit
          "https://media.giphy.com/media/3osxY6wFUab5dNzaYU/giphy.gif", // angry birds
          "https://media.giphy.com/media/OkzCz4O5Wa47REHfkR/giphy.gif", // tom y jerry
          "https://media.giphy.com/media/4ilFRqgbzbx4c/giphy.gif", // chico en carro
          "https://i.kym-cdn.com/photos/images/newsfeed/001/161/167/eda.gif", // chiquilla
          "https://pa1.narvii.com/5909/236583d8f88a078fbfea45c374a648b9a3e277e4_hq.gif", // chico
      ] 
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Está presumiendo!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
} 