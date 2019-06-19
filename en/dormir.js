const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let gifs = [
         "https://media.giphy.com/media/ZLxRWG0vhzpiE/giphy.gif", // bebita
         "https://media.giphy.com/media/l3M7smiKhkOcw/giphy.gif", // pooh
         "https://media.giphy.com/media/hYFr4KrCYq34c/giphy.gif", // gato durmiendo
         "https://media.giphy.com/media/a7EUhsVF4qHQI/giphy.gif", // gato animado
         "https://media.giphy.com/media/HL1MeEq6XebEA/giphy.gif", // sailor moon
         "https://media.giphy.com/media/wNzNn7Lco0yhq/giphy.gif", // gato y bebe
         "https://media.giphy.com/media/qRf7qdK1OTUMU/giphy.gif", // arnold
         "https://media.giphy.com/media/AxVvjUImqDBA2HpHhe/giphy.gif", // panes
         "https://media.giphy.com/media/4SsqeQj2pCyHK/giphy.gif", // anna de frozen
         "https://media.giphy.com/media/l3LZdeA8IiUJa/giphy.gif", // gatito
         "https://media.giphy.com/media/13TKQw9VGugKuA/giphy.gif", // pokemon
         "https://media.giphy.com/media/h7DyKGq716JMI/giphy.gif", // enanito
         "https://media.giphy.com/media/d5mI2F3MxCTJu/giphy.gif", // peresozo
         "https://media.giphy.com/media/26tjZmRqyPj9jUd56/giphy.gif", // homero simpsons
         "https://cdn.weeb.sh/images/SJYxNJKDZ.gif", // CHICA ANIME
         "https://cdn.weeb.sh/images/rk3-NkKDb.gif", // jajaasies
         "https://cdn.weeb.sh/images/ryBb41Kvb.gif", // niñita
      ] 
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Se esta durmiendo!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
} 