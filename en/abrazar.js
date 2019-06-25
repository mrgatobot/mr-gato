const Discord = require("discord.js")
exports.run = (client, message, args) => {
    let user = message.mentions.users.first();  
    let gifs = ["https://media.giphy.com/media/bvFS4rALdNDag/giphy.gif", // Normal
                   "https://media.giphy.com/media/JzsG0EmHY9eKc/giphy.gif", // Gato y Humano
                   "https://media.giphy.com/media/1dOH0aFZz3LyVVEMn9/giphy.gif", // Medicos
                   "https://media.giphy.com/media/3o6Zth3OnNv6qDGQ9y/giphy.gif", // Gatos Dibujo
                   "https://media.giphy.com/media/l4FGy5UyZ1KnVZ7BC/giphy.gif", // Fondo Bonito
                   "https://media.giphy.com/media/16bJmyPvRbCDu/giphy.gif", // Zootopia
                   "https://media.giphy.com/media/l378uBCYt1vfaj2aA/giphy.gif", // Chicas
                   "https://media.giphy.com/media/3oEjI5FOhdKTwzZqPS/giphy.gif", // Pareja Playeras
                   "https://media.giphy.com/media/3oEjI5FOhdKTwzZqPS/giphy.gif", // Pareja afro
                   "https://media.giphy.com/media/kooPUWvhaGe7C/giphy.gif", // Chicas Super Poderosas
                   "https://media.giphy.com/media/kooPUWvhaGe7C/giphy.gif", // Oso y Chica
                   "https://media.giphy.com/media/oVr48mIz8l5XG/giphy.gif", // Pareja Elegante
                   "https://media.giphy.com/media/1dOH0aFZz3LyVVEMn9/giphy.gif", // Antiguo
                   "https://media.giphy.com/media/1dOH0aFZz3LyVVEMn9/giphy.gif", // Chicas con Zoom
                   "https://media.giphy.com/media/l3vRgg34T0F3lYRws/giphy.gif", // Football
                   "https://media.giphy.com/media/zMmcyhHu5Fol2/giphy.gif", // UP
                   "https://media.giphy.com/media/9M56UyHgRaVIb9BvsS/giphy.gif", // Spiderman
                   "https://media.giphy.com/media/Ilkurs1e3hP0c/giphy.gif", // Mulan
                   "https://media.giphy.com/media/JGNmo9nBmmy8U/giphy.gif", // Lilo y stich
                   "https://media.giphy.com/media/WQ9l85vIyhRV6/giphy.gif", //enredados
                   "https://cdn.weeb.sh/images/BkBs2uk_b.gif", //pareja pirata
                   "https://media.giphy.com/media/lXiRKBj0SAA0EWvbG/giphy.gif", //Baymax y Hiro
                   "https://media.giphy.com/media/8tpiC1JAYVMFq/giphy.gif", //Pikachu y Piplup
                   "https://media.giphy.com/media/443DcGshH512B59bGG/giphy.gif", //Sinon y Kirito
                   "https://cdn.weeb.sh/images/Sk80wyhqz.gif", // niña y chica
                   "https://cdn.weeb.sh/images/S14ju_7Pb.gif", // pareja sad
                   "https://cdn.weeb.sh/images/Hyec_OmDW.gif", //k-on
                   "https://cdn.weeb.sh/images/Sk2gmRZZG.gif", // love live
                   "https://cdn.weeb.sh/images/r1VzDkmjW.gif", // omaru-chan
                   "https://cdn.weeb.sh/images/rk2-UL7PW.gif", // chica fangirl
               ] 
  if(!user) return message.channel.send('Mencione a un usuario.');
  if(user === message.author) return message.channel.send('No te puedes abrazar a ti mismo. (?)');
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Le dio un abrazo a** "+user+"**!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)])
  message.channel.send({embed});
}

