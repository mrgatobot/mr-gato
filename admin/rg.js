const Discord = require("discord.js")
exports.run = (client, message, args) => {

let nuevo = message.mentions.users.first();
   
    
if(!message.member.roles.find(r => r.name === "〘👑〙Staff")) return

if(!nuevo) return message.channel.send('Menciona a un usuario');
  
let canal = client.channels.get('502877069873643530');
  
canal.send(`💙 **¡Denle la bienvenida a **${nuevo} **!** 💙\n⇢ Esperemos que te agrade mucho el servidor.`);
let member = message.mentions.members.first();
// Quitar el (No registrado)
let NR = message.guild.roles.find(role => role.name === "No Registrado");
//let MB = message.guild.roles.find(role => role.name === "〘🔰〙Miembro");
member.removeRole(NR).catch(console.error);
// Dar (Miembro)
//member.addRole(MB).catch(console.error);
message.delete();
    //let rol = client.guild.roles.get("561284347823521811")

/*
client.users.get("493552568677433344").send(":warning: **__Nuevo reporte__** :warning:\n");
client.users.get("493552568677433344").send
("**Usuario:** "+message.author+"\n\n**Reportado:** "+reportado+"\n\n**Motivo:** " +texto+"\n");
*/
};
