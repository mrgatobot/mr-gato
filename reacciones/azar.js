const Discord = require("discord.js")
exports.run = (client, message, args) => {
    let user = message.mentions.users.first();  

var numero_max = args.join(" ");
  
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function isNumber(num) {
  return (typeof num == 'string' || typeof num == 'number') && !isNaN(num - 0) && num !== '';
};
  
  if(!numero_max) return message.channel.send("Ingresa un valor");
  if(!isNumber(numero_max)) return message.channel.send("Ingresa un valor");
  
  if(user === message.author) return message.channel.send('Coloca un numero.');
  var embed = new Discord.RichEmbed()
  .setTitle("Numero Aleatorio 1-"+numero_max)
  .setDescription("🎲 **Resultado:** "+ random(1,numero_max))
  .setColor(3447003)
  message.channel.send({embed});

}
