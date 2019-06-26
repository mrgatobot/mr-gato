const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let gifs = [
        "https://media.giphy.com/media/l0K4hlUSxMWHhvdn2/giphy.gif", // chris brown
        "https://media.giphy.com/media/l3fQueO8cHyZl2Pvi/giphy.gif", // ghunter sing
        "https://media.giphy.com/media/2wcnv9rQzfTb2/giphy.gif", // tipo cantando en la ducha
        "https://media.giphy.com/media/xT39D3tWC0jLA845s4/giphy.gif", // bugs bunny
        "https://media.giphy.com/media/yoJC2NCsQD0p6vL9ss/giphy.gif", // ariana pero grande
        "https://media.giphy.com/media/l0Ex5Ygan6Aacehry/giphy.gif", // columbiana cantando
        "https://media.giphy.com/media/ni7uQ7e0m4A92/giphy.gif", // niña gordita
        "https://media.giphy.com/media/6ooG3oz8Xn9Wo/giphy.gif", // minion
        "https://media.giphy.com/media/y2B9WU8Yl0rIs/giphy.gif", // bob esponja
        "https://media.giphy.com/media/CuU9hvQfoTaXC/giphy.gif", // don bigotes
        "https://media.giphy.com/media/DggdGj1E3n3jy/giphy.gif", // mickey mouse
        
      ] 
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Comenzo a cantar!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
}    