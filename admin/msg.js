const Discord = require("discord.js")
exports.run = (client, message, args) => {

if (!message.member.hasPermission('ADMINISTRATOR ')) return;
  
let user = message.mentions.users.first();
let user2 = message.guild.member(user);

let texto = args.slice(1).join(' ');

user2.send(texto+" , sirve.");

};
