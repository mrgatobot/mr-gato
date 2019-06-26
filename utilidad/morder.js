const Discord = require("discord.js")
exports.run = (client, message, args) => {
    let user = message.mentions.users.first();  
    let gifs = [
      "https://media.giphy.com/media/13g0j8a5ZPiMgw/giphy.gif", // Leonardo
      "https://media.giphy.com/media/l2Sqen2zc1sBuZFTO/giphy.gif", // afro
      "https://media.giphy.com/media/9ascgzEIpAtS8/giphy.gif", // chica afro
      "https://media.giphy.com/media/3o7WTAGfxK0ALn8u52/giphy.gif", // barbudo
      "https://media.giphy.com/media/jY0QV3LKIbFuM/giphy.gif", // Perro
      "https://media.giphy.com/media/13lLqCeTpkVVgA/giphy.gif", // vampira
      "https://media.giphy.com/media/YW3obh7zZ4Rj2/giphy.gif", // anime
      "https://cdn.weeb.sh/images/HJmbWxmiZ.gif", // neko kawaii
      "https://cdn.weeb.sh/images/ry00lxmob.gif", // adolescente
      "https://cdn.weeb.sh/images/rJAlbgXsb.gif", //adolescente rosada
      ] 
  
  if(!user) return message.channel.send('Mencione a un usuario.');
  if(user === message.author) return message.channel.send('¿Te gusta morderte?');
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Mordio a** "+user+"**!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)])
  message.channel.send({embed});
}

