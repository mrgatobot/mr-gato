const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let user = message.mentions.users.first();
    let gifs = [
        "https://media.giphy.com/media/l1LbUHrJb7GpuOHK0/giphy.gif", // perro
        "https://media.giphy.com/media/82YkzGpzlJglTVqbDq/giphy.gif", // calvo
        "https://media.giphy.com/media/N0CIxcyPLputW/giphy.gif", // Pikachu
        "https://media.giphy.com/media/tHJsAxoUjwYgcvZ9rC/giphy.gif", //pelos azules
        "https://media.giphy.com/media/L2z7dnOduqEow/giphy.gif", //anime girl
        "https://media.giphy.com/media/3otPouwTcL31a5gZvW/giphy.gif", // Hombre de cabeza
        "https://media.giphy.com/media/CwVO8apgdUmdO/giphy.gif",//gatos
        "https://media.giphy.com/media/3o85fPE3Irg8Wazl9S/giphy.gif", // fantasma opera
        "https://media.giphy.com/media/iY8zzwzmDxMwo/giphy.gif", // Cama acariciar
        "https://media.giphy.com/media/Z3k5tyzSMayjK/giphy.gif", // Cara, playera de rayas
        "https://media.giphy.com/media/5tmRHwTlHAA9WkVxTU/giphy.gif", //anime 2 lolis
        "https://media.giphy.com/media/3kywoOKuSOieokLfoO/giphy.gif", // Oso y pez
        "https://media.giphy.com/media/2QHLYZFJgjsFq/giphy.gif", // hatito anime
        "https://cdn.weeb.sh/images/B1FqkJKPW.gif", // nek kawaii
        "https://cdn.weeb.sh/images/SkksgsnCW.gif", // niña robotica
        "https://cdn.weeb.sh/images/rkADh0sqM.gif", // chica pelo azul
        "https://cdn.weeb.sh/images/rktgg1Yv-.gif", // chica neko
        "https://cdn.weeb.sh/images/SJva1kFv-.gif", // niña pelo azul
      ] 

  if(!user) return message.channel.send('Mencione a un usuario.');
  if(user === message.author) return message.channel.send('¿Te quieres acariciar a ti mismo? o.O');
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Acaricia a** "+user+"**!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
}    
