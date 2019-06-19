const Discord = require("discord.js")
exports.run = (client, message, args) => {

let miembro = message.mentions.users.first() || message.author;
let cooldown= new Set();

if(cooldown.has(message.author.id)){
   message.channel.send(message.author.username+ " utilice el comando despues de 10 segundos!");
   return;
}
cooldown.add(message.author.id);
setTimeout(() => {
  cooldown.delete(message.author.id);
}, 10000);
    const embed = new Discord.RichEmbed()
        .setImage(`${miembro.avatarURL}`)
        .setColor("#FE2E64")
        .setFooter(`Avatar de ${miembro.tag}`);

    message.channel.send(embed);
  
 // message.author
  
}