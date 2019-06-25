const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let gifs = [
        "https://media.giphy.com/media/l4FGsRqUV6KAcNBlu/giphy.gif", // valerian
        "https://media.giphy.com/media/2bUpP71bbVnZ3x7lgQ/giphy.gif", // forest gump
        "https://media.giphy.com/media/7kn27lnYSAE9O/giphy.gif", // mupet
        "https://media.giphy.com/media/3o7TKxA1pHqzA4k9B6/giphy.gif", // playera azul
        "https://media.giphy.com/media/l0Hlw9mLr5qI1VIY0/giphy.gif", // afro
        "https://media.giphy.com/media/3oriO5b7GIOdJu6dPy/giphy.gif", // esqueleto
        "https://media.giphy.com/media/OOZLyBA9Euq2I/giphy.gif", // power ranger
        "https://media.giphy.com/media/haEpZ7eLjtZM4/giphy.gif", // presidente
        "https://media.giphy.com/media/13sozYO4hmSMUw/giphy.gif", // charles chaplin
        "https://media.giphy.com/media/l44QeXqzp5JoYSNe8/giphy.gif", // zorro caricatura
        "https://media.giphy.com/media/3oEduThWOA1O3p297a/giphy.gif", // ninja
        "https://media.giphy.com/media/3oKIPwoeGErMmaI43S/giphy.gif", // botarga
        "https://media.giphy.com/media/SWKyABQ08mbXW/giphy.gif", // elefante
        "https://cdn.discordapp.com/attachments/399448944889036801/541469156730601485/tumblr_inline_nmuf6626Qm1t57fif_500.gif", // naruto
        "https://cdn.discordapp.com/attachments/399448944889036801/541469056914423828/tumblr_n28ntrBDQw1tupvubo1_500.gif", // pikachu
        "https://cdn.discordapp.com/attachments/399448944889036801/541469126200262664/e918327175398142f1a11026859a52fe36b73d99_hq.gif", // natsu
        "https://cdn.discordapp.com/attachments/399448944889036801/541478007815012356/tumblr_o0se8k4kEH1rqe0rbo1_500.gif", // maestro naruto
        "https://cdn.discordapp.com/attachments/399448944889036801/541467455973883916/anime-girl-running-gif-1.gif", // chica anime
        "https://cdn.discordapp.com/attachments/399448944889036801/564151352532664320/unnamed_2.gif", // chika fujiwaea
      ] 
    
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡¡Empezo a correr!!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
}   
