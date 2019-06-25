const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let user = message.mentions.users.first();
  
    let gifs = [
        "https://media.giphy.com/media/gSIz6gGLhguOY/giphy.gif", // luchas
        "https://media.giphy.com/media/vxvNnIYFcYqEE/giphy.gif", // drama gringo
        "https://media.giphy.com/media/uqSU9IEYEKAbS/giphy.gif", // padre de familia
        "https://media.giphy.com/media/3XlEk2RxPS1m8/giphy.gif", //pelicula vieja
        "https://media.giphy.com/media/6Fad0loHc6Cbe/giphy.gif", // naruto y sakura
        "https://media.giphy.com/media/iIPI1tpT9HcUE/giphy.gif", // gato negro
        "https://media.giphy.com/media/xUA7b9Wc1uaT52QfO8/giphy.gif", // asiatica
        "https://media.giphy.com/media/tV0HkQju9zHR6/giphy.gif", // Jigglypuff
        "https://media.giphy.com/media/Y6c59hTH3TJoA/giphy.gif", // futurama
        "https://media.giphy.com/media/lX03hULhgCYQ8/giphy.gif", // perro gordo
        "https://media.giphy.com/media/s5zXKfeXaa6ZO/giphy.gif", // perro y gato
        "https://media.giphy.com/media/zRlGxKCCkatIQ/giphy.gif", // anime
        "https://media.giphy.com/media/UowrgRPNm9GcU/giphy.gif", // frezzer y goku
        "https://media.giphy.com/media/etHUmA91GfDS8/giphy.gif", // snake
        "https://media.giphy.com/media/Blsb9lFTZr54s/giphy.gif", // wera
        "https://cdn.weeb.sh/images/B1-ND6WWM.gif", // saitama
        "https://cdn.weeb.sh/images/rkkZP6Z-G.gif", // niña efe
        "https://cdn.weeb.sh/images/SkFLH129z.gif", // titan(?
          ] 

  if(!user) return message.channel.send('Mencione a un usuario.');
  if(user === message.author) return message.channel.send('No te puedes pegar a ti mismo. (?)');
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Le pego a** "+user+"**!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
}
