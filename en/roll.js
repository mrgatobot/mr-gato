const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let image = [
        "https://cdn.discordapp.com/attachments/493989202162221056/567067586651488256/dadonro2.png", // nro 1
        "https://cdn.discordapp.com/attachments/559439355136180232/566891851060346890/dadonro2.png", // nro 2
        "https://cdn.discordapp.com/attachments/559439355136180232/566893682742132756/dadonro2.png", // nro 3
        "https://cdn.discordapp.com/attachments/493989202162221056/567076218680115211/dadonro2.png", // nro 4
        "https://cdn.discordapp.com/attachments/493989202162221056/567085433893289984/dadonro2.png", // nro 5
        "https://cdn.discordapp.com/attachments/493989202162221056/567062920547139604/dadonro2.png", // nro 6
      ] 
  var embed = new Discord.RichEmbed()
  .setTitle("Dado Lanzado")
  .setDescription("**Tu dado es...**")
  .setColor(3447003)
  .setImage(image[Math.floor(Math.random() * image.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
} 