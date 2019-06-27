const Discord = require("discord.js")
exports.run = (client, message, args) => {
    let user = message.mentions.users.first();  
    let gifs = [
      "https://pa1.narvii.com/5776/cb8033555c2f31ab597094b39bae59da2d50180d_hq.gif", // loli morada
      "https://media.giphy.com/media/jQsXrHgj2DJ8aIxbmY/giphy.gif", // mujer bolsa
      "https://media.giphy.com/media/ZcdQVG5l8sxlaNeWJ8/giphy.gif", // carro
      "https://media.giphy.com/media/lgQ3VXCcMTT9K/giphy.gif", // gato
               ] 
  if(!user) return message.channel.send('Mencione a un usuario.');
  if(user === message.author) return message.channel.send('No te puedes abrazar a ti mismo. (?)');
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Acaba de robarse a** "+user+"**!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)])
  message.channel.send({embed});
}
