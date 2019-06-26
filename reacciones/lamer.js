const Discord = require("discord.js")
exports.run = (client, message, args) => {
    let user = message.mentions.users.first();  
    let gifs = [
          "https://media.giphy.com/media/rCDk9E3Szskus/giphy.gif", // frozen
          "https://media.giphy.com/media/NzbcdfP2B6GKk/giphy.gif", // perrito y chico
          "https://media.giphy.com/media/z6SINjHswPVwQ/giphy.gif", // bob esponja
          "https://media.giphy.com/media/2SYc7mttUnWWaqvWz8/giphy.gif", //gato cool
          "https://media.giphy.com/media/A8ReUjJdMCNOM/giphy.gif", // gatitos <3
          "https://media.giphy.com/media/GgfH8RY2DSa3u/giphy.gif", // chico con destapacañas
          "https://media.giphy.com/media/8PpJjUfYAH6sEW8FpD/giphy.gif", // pedro picapiedra
          "https://cdn.weeb.sh/images/rJ6hrQr6-.gif", // issey
          "https://cdn.weeb.sh/images/HkEqiExdf.gif", // zero two y ichigo
          "https://cdn.weeb.sh/images/Syg8gx0OP-.gif", // chico y chica
  ] 
  if(!user) return message.channel.send('Mencione a un usuario.');
  if(user === message.author) return message.channel.send('Te vas a lamer?...');
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Lamiste a** "+user+"**!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)])
  message.channel.send({embed});
}
