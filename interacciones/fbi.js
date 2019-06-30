const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let gifs = [
        "https://media.giphy.com/media/xTiTnEcelJSG8j4KYM/giphy.gif", // placa
        "https://media.giphy.com/media/Bc3SkXz1M9mjS/giphy.gif", // perro salchicha
        "https://media.giphy.com/media/81xwEHX23zhvy/giphy.gif", // 2 polis
        "https://media.giphy.com/media/l1J9PQdcH7VKnKbAs/giphy.gif", // jugar pistola
        "http://giphygifs.s3.amazonaws.com/media/10NPdN6z9vTYWI/giphy.gif", // baile
        "https://media.giphy.com/media/m9rMVyKactNK/giphy.gif", // caricatura
        "https://media.giphy.com/media/tp1U2lhRChsDC/giphy.gif", // mujer
        "https://media.giphy.com/media/1BH8mFHRQIwru48Edv/giphy.gif", // mujer
        
      ] 
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Ha llamado al FBI!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
}  
