const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
    let user = message.mentions.users.first();
    let gifs_con = [
        "https://media.giphy.com/media/Pjs1kqtH1KTaU/giphy.gif", // futball
        "https://media.giphy.com/media/26gseZnixmQOrTsVa/giphy.gif", // bar
        "https://media.giphy.com/media/5xaOcLGvzHxDKjufnLW/giphy.gif", // caricatura vieja
        "https://media.giphy.com/media/5xaOcLGvzHxDKjufnLW/giphy.gif", // caricatura vieja
        "https://media.giphy.com/media/l0HUqsz2jdQYElRm0/giphy.gif", // heroes
        "https://media.giphy.com/media/9Zq0UbBVSsx5C/giphy.gif", // ellen
        "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",// fiesta oficina
        "https://media.giphy.com/media/xT77XKlezDkZXq7a2k/giphy.gif",// pelicula 80s
        "https://media.giphy.com/media/l2JHRhAtnJSDNJ2py/giphy.gif", // palta
        "https://media.giphy.com/media/3ornkdtVzQfIRpwfug/giphy.gif",// "por que es lo que un hombre hace"
        "https://media.giphy.com/media/GFBME4lzPVwxW/giphy.gif", // concursos de baile
        "https://media.giphy.com/media/bTzFnjHPuVvva/giphy.gif", // afros
        "https://media.giphy.com/media/x6CO4R48ca544/giphy.gif", // disco
        "https://media.giphy.com/media/l3vRlT2k2L35Cnn5C/giphy.gif" // Disney
      ] 
    let gifs = [
        "https://media.giphy.com/media/j3gsT2RsH9K0w/giphy.gif", // afro cafe
        "https://media.giphy.com/media/SGkufeMafyuBhIw796/giphy.gif", // show viejo
        "https://media.giphy.com/media/wAxlCmeX1ri1y/giphy.gif", // snoop dos
        "https://media.giphy.com/media/RX7N03MEUafW8/giphy.gif", //bronceada
        "https://media.giphy.com/media/3og0Izv3p7vMprq2Qw/giphy.gif", //hot dog
        "https://media.giphy.com/media/iNZbEEPMgZeTwQsjKY/giphy.gif", // Osos
        "https://media.giphy.com/media/l3q2tdk1N5iBxpAZ2/giphy.gif",//guitarra
        "https://media.giphy.com/media/BkL4Vyz0z2iYQMhwFw/giphy.gif", // niña afro
        "https://media.giphy.com/media/w8f9g2x44aGI/giphy.gif", // Teletubi
        "https://media.giphy.com/media/6fScAIQR0P0xW/giphy.gif", // star wars
        "https://media.giphy.com/media/jzaZ23z45UxK8/giphy.gif", //afro robusto
        "https://media.giphy.com/media/5xaOcLGvzHxDKjufnLW/giphy.gif", // caricatura vieja
        "https://media.giphy.com/media/1qh7mOFRIp1xrUaaS8/giphy.gif", //groot
        "https://media.giphy.com/media/5z5Ljy7xBtE8DVukba/giphy.gif", // chico anime cepillandose
        "https://media.giphy.com/media/1qk3NRWzLHW3lVHEAW/giphy.gif", // jake y insecto
        "https://media.giphy.com/media/k5Agkp0qwNZIFJSxE8/giphy.gif", // pikachu y togepi
        "https://media.giphy.com/media/YWVzxjoalHzLyv8kzc/giphy.gif", // oso polar bailando
        "https://media.giphy.com/media/TaD4gHbbeZKprQuhKX/giphy.gif", // hombre y gato
        "https://media.giphy.com/media/1rOVRVEqEwTnHvZvsa/giphy.gif", // pooh y piglet
        "https://media.giphy.com/media/1zKf1oOqufrSlsDiY9/giphy.gif", // bebita
        "https://cdn.weeb.sh/images/B1UeKUmP-.gif", // alumnas
        "https://cdn.weeb.sh/images/r1GA_LQP-.gif", // k-on
        "https://cdn.weeb.sh/images/SkMp_8QPZ.gif", // love live
        "https://cdn.weeb.sh/images/Hk0duIXPb.gif", // trapito(?
        "https://cdn.weeb.sh/images/H1ha_L7DW.gif", // sono hanabira
        "https://images-ext-1.discordapp.net/external/AH1tmnmEqRJal9mhvrULZjQRSrGMfsisK9LWSptwuRY/https/cdn.weeb.sh/images/HydF_LmPW.gif", //largo
      ] 
  if (user){ // bailar con
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Empezó a bailar con **"+user+"**!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs_con[Math.floor(Math.random() * gifs_con.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
  } else {
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Empezó a bailar!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
  }
}    