const Discord = require("discord.js")
exports.run = (client, message, args) => {

let reportado = message.mentions.users.first();
let texto = args.slice(1).join(' ');

if(reportado === message.member.bot) return message.channel.send("No puedes reportar al bot."); // No sirve
if(reportado === message.author) return message.channel.send("No te puedes reportar a ti mismo.");
if(!reportado) return message.channel.send('Comando invalido, usa: \n⇢ '+"`"+'+reportar <usuario> <Motivo>'+"`");
if(!texto) return message.channel.send('Comando invalido, usa: \n⇢ '+"`"+'+reportar <usuario> <Motivo>'+"`");
  
let canal = client.channels.get('561749985524318238');
//
canal.send(':warning: **__Nuevo reporte__** :warning:\n');
canal.send("→ El usuario "+message.author+" ha reportado a: "+reportado+"\n **Motivo:** `" +texto+"`");

message.delete();
};
