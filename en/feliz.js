const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let gifs = [
          "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif", // jonah
          "https://media.giphy.com/media/rjkJD1v80CjYs/giphy.gif", // celebrando
          "https://media.giphy.com/media/aQYR1p8saOQla/giphy.gif", // anna de frozen
          "https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif", // rapidash zootopia
          "https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif", // minions
          "https://media.giphy.com/media/kEKcOWl8RMLde/giphy.gif", // homero simpsons
          "https://media.giphy.com/media/DYH297XiCS2Ck/giphy.gif", // kermit
          "https://media.giphy.com/media/l46C52IJdRfvCGyVW/giphy.gif", // hijas de gru
          "https://media.giphy.com/media/yoJC2GnSClbPOkV0eA/giphy.gif", // niña loca
          "https://media.giphy.com/media/WUq1cg9K7uzHa/giphy.gif", // presentador
          "https://media.giphy.com/media/3ndAvMC5LFPNMCzq7m/giphy.gif", // perro
          "https://media.giphy.com/media/JMotSbZTCEWl2/giphy.gif", // dog de up
          "https://media.giphy.com/media/58FqZ3aBu2C2xt8wME/giphy.gif", // chica hype
          "https://media.giphy.com/media/UQ4ZYtqML9s7S/giphy.gif", // squirtle
          "https://cdn.weeb.sh/images/HJz44ytDW.gif", // chica anime
          "https://cdn.weeb.sh/images/SJecVktDb.gif", // chica anime 2
          "https://cdn.weeb.sh/images/BytqEyKPZ.gif", // chica k-on
      ] 
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Está feliz!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
} 