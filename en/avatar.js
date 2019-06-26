const Discord = require("discord.js")
exports.run = (client, message, args) => {

let miembro = message.mentions.users.first() || message.author;
let cooldown= new Set();

if(cooldown.has(message.author.id)){
   message.channel.send(message.author.username+ " espera 10s para volver a usar el comando.");
   return;
}
cooldown.add(message.author.id);
setTimeout(() => {
  cooldown.delete(message.author.id);
}, 10000);
    const embed = new Discord.RichEmbed()
    //{miembro.tag}
        .setTitle("Avatar de: "+{miembro.tag})
        .setImage(`${miembro.avatarURL}`)
        .setColor(3447003)
    message.channel.send(embed);
  
 // message.author
  
}
