const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let user = message.mentions.users.first();
  
    let gifs = [
        "https://media.giphy.com/media/2dQ3FMaMFccpi/giphy.gif", // corazon dedos
        "https://media.giphy.com/media/3oriO6qJiXajN0TyDu/giphy.gif", // gnomo
        "https://media.giphy.com/media/xT39CXg70nNS0MFNLy/giphy.gif", // caricatura
        "https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif", // patricio
        "https://media.giphy.com/media/Tia2InBEWaQgckP3UG/giphy.gif", // oso
        "https://media.giphy.com/media/Z21HJj2kz9uBG/giphy.gif", // beso caricatura
        "https://media.giphy.com/media/l41JWw65TcBGjPpRK/giphy.gif", // I LOVE YOU
        "https://media.giphy.com/media/1hqb8LwPS2xCNCpWH8/giphy.gif", // conejita
        "https://media.giphy.com/media/ZOStzpF9H5syI/giphy.gif", // corazon salido
        "https://media.giphy.com/media/1sSfhxzWHJ4vC/giphy.gif", // box bunny
        "https://media.giphy.com/media/iJa6kOfJ3qN7a/giphy.gif", // pizza
        "https://media.giphy.com/media/yx5QDTbqAY7vJyIGBO/giphy.gif", // dexter
        "https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif", // corazon feliz
          ] 

  if(!user) return message.channel.send('Mencione a un usuario.');
  if(user === message.author) return message.channel.send('No te puedes pegar a ti mismo. (?)');
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Ama a** "+user+"**! <3**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
}
