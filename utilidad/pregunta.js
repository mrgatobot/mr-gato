const Discord = require("discord.js")
exports.run = (client, message, args) => {
    let user = message.mentions.users.first();  
    let res = [
      "¡Claro que si!",
      "No lo creo . .",
      "Es posible . .",
      "¡Claro que no!",
      "No lo dudes.",
      "Mas o menos.",
      "Un poco. .",
      "Para nada.",
      "¡Ni siquiera lo pienses!",
      "La respuesta es mil veces si.",
      "Creo que si. .",
      "Por supuesto.",
      "Vaya que si.",
      "Eh, eso parece.",
               ] 
  if(!user) return message.channel.send('Mencione a un usuario.');
  if(user === message.author) return message.channel.send('No te puedes abrazar a ti mismo. (?)');
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField("Respuesta",res[Math.floor(Math.random() * res.length)])
  .setColor(3447003)
  .setTimestamp()
  //.setImage()
  message.channel.send({embed});
}
