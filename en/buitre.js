const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let user = message.mentions.users.first();
  
    let gifs = [
        "https://media.giphy.com/media/YnporN0JURk2776uK0/giphy.gif", // binoculares
        "https://media.giphy.com/media/boLCBYvR8Hmmc/giphy.gif", // selfie
        "https://media.giphy.com/media/GCjIE9C9Eb9V6/giphy.gif", // canoso
        "https://media.giphy.com/media/3o7WIxrN6q5S2xMVZ6/giphy.gif", // lupa
        "https://media.giphy.com/media/26Ff1wadq3uSiww0w/giphy.gif", // chico flores
        "https://media.giphy.com/media/10UUe8ZsLnaqwo/giphy.gif", // beso traje
        "https://media.giphy.com/media/Zisrs57aI899K/giphy.gif", // beso afro 
        "https://media.giphy.com/media/26ufq2sjaPsfemSuk/giphy.gif", // lamer cejas
        "https://media.giphy.com/media/XujX4hTaOi9q0/giphy.gif", // brock
          ] 

  if(!user) return message.channel.send('Mencione a un usuario.');
  if(user === message.author) return message.channel.send('No te puedes pegar a ti mismo. (?)');
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(user)
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
}
