const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let user = message.mentions.users.first();
  
    let gifs = [
        "https://media.giphy.com/media/5Ta0gOAgEQrvO/giphy.gif", // chica morenita
        "https://media.giphy.com/media/108M7gCS1JSoO4/giphy.gif", // Gatita beso
        "https://media.giphy.com/media/dpSrm4cwUmCeQ/giphy.gif", //niña besito
        "https://media.giphy.com/media/3o7qDVQ2GrFAf1MVgc/giphy.gif", //pareja com zoom
        "https://media.giphy.com/media/TftAZamDxqUdq/giphy.gif", // koalas
        "https://media.giphy.com/media/10wwy1cJ8j2aD6/giphy.gif", // up beso
        "https://media.giphy.com/media/X9w8yR8kFwJMs/giphy.gif", // beso pantalla
        "https://media.giphy.com/media/124gj4XvM8f3fa/giphy.gif", // Sirenita Disney
        "https://media.giphy.com/media/lTQF0ODLLjhza/giphy.gif", //bob Esponja
        "https://media.giphy.com/media/10UUe8ZsLnaqwo/giphy.gif", // afro beso
        "https://media.giphy.com/media/gaPfF9wPI3Pa0/giphy.gif", // old style
        "https://media.giphy.com/media/VF65SrQlmClUc/giphy.gif", // Tarantino
        "https://media.giphy.com/media/9TOe64OPmYxbO/giphy.gif", // Pelirojo
        "https://giphy.com/gifs/90s-mr-bean-Nydo55HzhyGqI", // mr bean
        "https://media.giphy.com/media/ui0jFqDOX8qje/giphy.gif", // chico rudo
        "https://cdn.weeb.sh/images/Bkk_hpdv-.gif", //pareja de novios
        "https://cdn.weeb.sh/images/BkUJNec1M.gif", // chicas
        "https://cdn.weeb.sh/images/HJlWhpdw-.gif", // pareja
        "https://cdn.weeb.sh/images/ryoW3T_vW.gif", // sao
      ] 
  if(!user) return message.channel.send('Mencione a un usuario.');
  if(user === message.author) return message.channel.send('¡No te puedes besar a ti mismo!');
var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Le robo un beso a** "+user+"**!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)])
  message.channel.send({embed});
}

/*
var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Dame esos 5** "+user+"**!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)])
  message.channel.send({embed});
}
*/

/*
const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
 // Aqui va tu codigo 
}
*/
