const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let gifs = [
        "https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif", // pikachu
        "https://media.giphy.com/media/XoW2jShBRKkxO/giphy.gif", // alicia
        "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif", // patricio estrella
        "https://media.giphy.com/media/20ANgYG4KfSakvutbO/giphy.gif", //wera
        "https://media.giphy.com/media/5WmyaeDDlmb1m/giphy.gif", //leonardo el del titanic
        "https://media.giphy.com/media/4bBLOhnMb0vHG/giphy.gif", // wera tapandose la boca
        "https://media.giphy.com/media/2rtQMJvhzOnRe/giphy.gif",// homero
        "https://media.giphy.com/media/KDRv3QggAjyo/giphy.gif", // toby el que hizo spiderman
        "https://media.giphy.com/media/l3q2RauzE5Vzf7iYo/giphy.gif", // laud house
        "https://media.giphy.com/media/8w68TkeqzDnLa/giphy.gif", // sailor moon
        "https://media.giphy.com/media/tzv60mgyXW3GE/giphy.gif", // hombre traje
        "https://media.giphy.com/media/l0HlDJhyI8qoh7Wfu/giphy.gif", // fondo morado
        "https://media.giphy.com/media/4NuAILyDbmD16/giphy.gif", // naruto
        "https://cdn.weeb.sh/images/BJf41e51z.gif", // tsui
        "https://cdn.weeb.sh/images/Syzw78XPZ.gif", // zorrita anime
        "https://cdn.weeb.sh/images/HyO7mIXvW.gif", // chica anime
        "https://cdn.weeb.sh/images/ByPGQIQwb.gif", // chica k-on
        "https://cdn.weeb.sh/images/rJ5IX8XPZ.gif", // megumim
        "https://cdn.weeb.sh/images/rJCG7IXPb.gif", // chica anime(?
        "https://cdn.weeb.sh/images/rkXImUQDW.gif", // chica neko
      ] 
    
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**Empezo a llorar. . .**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
}    