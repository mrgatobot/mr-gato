const Discord = require("discord.js")
exports.run = (client, message, args) => {
  
  var embed = new Discord.RichEmbed()
  .setColor("#f22b46")
  .addField("**✦ Creadores:**", "`DeMaick#8614` | `Pao#2243`")
  .addField("✦ Invitación del server:", "https://discord.gg/qCSawex")
  .addField("Comandos Útiles:", "`+reportar,` `+anonimo,` `+azar,` `+decir,` `+dado,` ")
  .addField("Comandos de Reacción:", "`+cantar,` `+bailar,` `+feliz,` `+sonrojado,` `+reir,` `+presumir,` `+dormir,` `+aburrido,` `+ora` `+fbi` `+correr,` `+asco,` `+llorar,` `+gritar,` `+enojarse,`")
  .addField("Comandos Interactivos:", "`+amar,` `+abrazar,` `+besar,` `+acariciar,` `+lamer,` `+bailar,` `+chocalas,`  `+buitre,` `+morder,` `+pegar,` `+matar,`")
  .setFooter("\n\n(Escribe cualquier comando en algún canal para más información)")
  .setColor(3447003)
  message.channel.send({embed});
  
};

