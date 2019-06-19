const Discord = require("discord.js")
exports.run = (client, message, args) => {

if (!message.member.hasPermission('ADMINISTRATOR ')) return;
  
let user = message.mentions.users.first();
let user2 = message.guild.member(user);

let texto = args.slice(1).join(' ');

user2.send(":warning: **__Has recibido una infracción__** :warning:("+user+")\n\n→ **Servidor:** `CatChat`\n**→ Motivo:** `"+ texto+"`"+"\n\nModera tu comportamiento para evitar futuras infracciones.");
user2.send("");
};

