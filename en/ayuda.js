const Discord = require("discord.js")
exports.run = (client, message, args) => {
  
  var embed = new Discord.RichEmbed()
  .setColor("#f22b46")
  .addField("**✦ Creadores:**", "`DeMaick#5160` | `Pao#2243`")
  .addField("**✦ Servidor del bot:**", "https://discord.gg/qCSawex")
  .addField("﹥ Comandos Musica:", "**[En mantenimiento]**")
  .addField("﹥ Comandos de Reacción:", "`+llorar,` `+cantar,` `+feliz,` `+reir,` `+presumir,` `+dormir,` `+correr,` `+gritar,` `+sonrojado,` `+enojarse,` `+aburrido,`")
  .addField("﹥ Comandos Interactivos:", "`+abrazar,` `+besar,` `+acariciar,` `+bailar,` `+pegar,` `+lamer,` `+chocalas,` `+morder,` `+matar,`")
  .addField("﹥ Comandos Útiles", "`+dado,` `+edecir,` `+anonimo,` `+decir,` `+roll,` `+ora`")
  .setColor(3447003)
  message.channel.send({embed});
  
};

