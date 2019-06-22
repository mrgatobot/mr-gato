const Discord = require("discord.js")
exports.run = (client, message, args) => {
  //if (message.channel.id === '504748615110098973'){
  
  message.delete();
  let texto = args.join(" "); 
  if(!texto) return message.channel.send('Escribe una confesion.');
  var embed = new Discord.RichEmbed()
  .setAuthor("Anonimo")
  .setDescription(texto)
  .setColor(3447003)
  .setTimestamp()
  message.channel.send({embed});
  /*
  } else {
    message.channel.send("No puedes usar este comando en este canal.");
  }
  */
}

