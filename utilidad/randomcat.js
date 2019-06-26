const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let image = [
        "https://i.pinimg.com/originals/64/d7/f3/64d7f3ad3b9f3863480fe65c7ed84dcd.jpg", // nro 1
        "https://i.pinimg.com/originals/5e/c4/80/5ec480ddcab3c63e8592e0522170ae9a.jpg", // nro 2
        "https://i.pinimg.com/originals/6a/9a/c8/6a9ac83c95a44f0d0b0c0a433da54d29.jpg", // nro 3
        "https://3.bp.blogspot.com/-aZUScoN3dKQ/XIUojyC7KAI/AAAAAAAASTk/69CkXGTF9wwikZalMWMHtg48LORJRdGIACLcBGAs/s1600/gatitos%2Btiernos%2B5.jpg", // nro 4
        "https://3.bp.blogspot.com/-dYI-JhmzXas/XFcc9GEf60I/AAAAAAAARsA/D2OgrG0VjXINiceMy7UhQKd8giPozzXjACLcBGAs/s1600/imagenes%2B-%2Bgratis%2B-%2Bde%2B-%2Bgatitos%2B-%2Btiernos%2B-%2Bpara%2B-%2Bdescargar%2B-%2B4.jpg", // nro 5
        "https://4.bp.blogspot.com/-qzu4nbtyym8/XFcc9yq_lYI/AAAAAAAARsI/NF8mk3usKSwMYLi7WlJKmdT6KrF2fWdkwCLcBGAs/s1600/imagenes%2B-%2Bgratis%2B-%2Bde%2B-%2Bgatitos%2B-%2Btiernos%2B-%2Bpara%2B-%2Bdescargar%2B-%2B6.jpg", // nro 6
        "https://1.bp.blogspot.com/-rFSnWDuqx-I/XFcc9xQQhBI/AAAAAAAARsM/dVCCWhH5kqM_HD-d5SmO9N4EXj_GNzbjwCLcBGAs/s1600/imagenes%2B-%2Bgratis%2B-%2Bde%2B-%2Bgatitos%2B-%2Btiernos%2B-%2Bpara%2B-%2Bdescargar%2B-%2B7.jpg", // nro 7
        "https://1.bp.blogspot.com/-mPzTl1VlTbM/XFcc-bT-QLI/AAAAAAAARsQ/SRa_STYeLKs9SpEMcJya2Uses0eY9QYMwCLcBGAs/s1600/imagenes%2B-%2Bgratis%2B-%2Bde%2B-%2Bgatitos%2B-%2Btiernos%2B-%2Bpara%2B-%2Bdescargar%2B-%2B8.jpg", // nro 8
      ] 
  var embed = new Discord.RichEmbed()
  .setTitle("Mira! Un lindo gato.")
  .setColor(3447003)
  .setImage(image[Math.floor(Math.random() * image.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
} 
