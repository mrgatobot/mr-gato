const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let gifs = [
        "https://media.giphy.com/media/1ylP1LlMhSZT6vqxmT/giphy.gif", // barbon playera negra
        "https://media.giphy.com/media/2pk0kZS3sIcAo/giphy.gif", // blanco y negro
        "https://media.giphy.com/media/l3q2PUMfj6iZyE2pG/giphy.gif", // wera zoon
        "https://media.giphy.com/media/P4AqZ8mIk7CGQ/giphy.gif", // invader zim
        "https://media.giphy.com/media/ZkWNFhJlKgsW4/giphy.gif", // enemigo de dexter
        "https://media.giphy.com/media/3o6Zt5xC8uSAv0JoVq/giphy.gif", // sixt
        "https://media.giphy.com/media/94SPsbhsY2FTq/giphy.gif", // el que se parece a putin
        "https://media.giphy.com/media/l0MYunAI4j10uWbFm/giphy.gif", // chica pelo largo
        "https://media.giphy.com/media/3EjqRNFJmn0C4/giphy.gif", // bob y patricio
        "https://media.giphy.com/media/ECtLJKdGj8jfy/giphy.gif", // donald
        "https://media.giphy.com/media/83YPtFOmc9x3a/giphy.gif", // llenas
        "https://media.giphy.com/media/26uTs96mzTS70tYAw/giphy.gif", // cenicienta
        "https://media.giphy.com/media/65Mpujt9DE5ga9bXzc/giphy.gif", // futbal
        "https://media.giphy.com/media/13uNYQRS1U6mTC/giphy.gif", // peter pan
        "https://media.giphy.com/media/3oEjHAUOqG3lSS0f1C/giphy.gif", // perro caricatura
        "https://media.giphy.com/media/3i7zenReaUuI0/giphy.gif", // hombre cabeceando
        "https://media.giphy.com/media/Fn7q3cMgPZmqk/giphy.gif", // minions
      
      ] 
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡¡Se esta riendo!!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
}    