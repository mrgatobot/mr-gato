const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let gifs = [
        "https://media.giphy.com/media/R0jWWtH1CtFEk/giphy.gif", // wera
        "https://media.giphy.com/media/pPwL8pCLs2kZq/giphy.gif", // wera pelo largo
        "https://media.giphy.com/media/3o8dFEVMFacI1HP9ok/giphy.gif", // agitando manos
        "https://media.giphy.com/media/3o6ZteItLw5qtYXuhy/giphy.gif", // hombros
        "https://media2.giphy.com/media/3otPoPoCbPjSP4ktGw/giphy.gif", // oficina
        "https://media.giphy.com/media/eLWJeULcoOYbS/giphy.gif", // mujer verde
        "https://media.giphy.com/media/3oriNOXIFOZx7I2Cwo/giphy.gif", // bob esponja
        "https://media.giphy.com/media/ppFaBYPO8paUg/giphy.gif", // escandalosos
        "https://media.giphy.com/media/McE7sEF7yqcSc/giphy.gif", //abuelita
      ] 
    
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**Esta asqueado . .**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
}    
