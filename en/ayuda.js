const Discord = require("discord.js")
exports.run = (client, message, args) => {
  
  var embed = new Discord.RichEmbed()
  .setColor("#f22b46")
  .addField("Creadores:", "`DeMaick#5160` | `Pao#2243`")
  .addField("**~~Comandos Musica:~~ |En Mantenimiento|**", "**EN MANTENIMIENTO**")
  .addField("**Comandos Reacciones:**", "`+llorar,` `+cantar,` `+feliz,` `+reir,` `+presumir,` `+dormir,` `+correr,` `+dormir,` `+gritar,` `+sonrojado,` `+enojarse,` `+aburrido,`")
  .addField("**Comandos Interactivos:**", "`+abrazar,` `+besar,` `+acariciar,` `+bailar,` `+pegar,` `+lamer,` `+chocalas,` `+morder,` `+matar,`")
  .addField("**Comandos Divertidos:**", "`+dado,` `+edecir,` `+anonimo,` `+decir,` `+roll,`")
  .setColor(3447003)
  message.channel.send({embed});
  
};

