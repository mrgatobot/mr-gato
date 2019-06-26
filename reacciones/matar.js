const Discord = require("discord.js")
exports.run = (client, message, args) => {
    let user = message.mentions.users.first();  
    let gifs = [
      "https://media.giphy.com/media/1ludrxHRnUmT6/giphy.gif", // chica blanco y negro
      "https://media.giphy.com/media/FYOxEpdW8K1H2/giphy.gif", // niña blanco y negro
      "https://media.giphy.com/media/FFQds1zizs7Dy/giphy.gif", // locos adam
      "https://media.giphy.com/media/DYQrUcDgQi7Ha/giphy.gif", // padre locos adam
      "https://media.giphy.com/media/kHSPEiBbJB2Pm/giphy.gif", // ciervo
      "https://media.giphy.com/media/y1WDIwAZRSmru/giphy.gif", // chica
      "https://media.giphy.com/media/yNFjQR6zKOGmk/giphy.gif", // elevador
      "https://media.giphy.com/media/uTCAwWNtz7U2c/giphy.gif", // gato y niño
      "https://media.giphy.com/media/CofEfD9RTPDyM/giphy.gif", // toro
      "https://media.giphy.com/media/84X9MTDnsGofK/giphy.gif", // militar
      "https://media.giphy.com/media/4Zd11pBLMVoAZnuY33/giphy.gif", // pistola
      "https://media.giphy.com/media/1iscKUx1LNGkwEdpcN/giphy.gif", // gigante
      "https://media.giphy.com/media/9tXn7DEOsjifNDEenF/giphy.gif", // afro old
              ] 
  if(!user) return message.channel.send('Mencione a un usuario.');
  if(user === message.author) return message.channel.send('¡¿Acaso quieres acabar con tu vida?!');
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Mató a a** "+user+"**!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)])
  message.channel.send({embed});
}

