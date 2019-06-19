const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
    let user = message.mentions.users.first();
    
    let gifs = [
        "https://media1.tenor.com/images/68bdb7f778cf76bfaa256ebf53164558/tenor.gif?itemid=5591675", //fullmetal
        "https://media1.tenor.com/images/a5919cfa4e6d439c6a9ce8c792f57217/tenor.gif?itemid=9923313", // love live
        "https://media1.tenor.com/images/1de5d764eaab2f56f188467122ca4fd7/tenor.gif?itemid=8860186", // general enfadado
        "https://media1.tenor.com/images/3424df822494d78bc184aae3e14d84e3/tenor.gif?itemid=4675166", // chica anime
        "https://media1.tenor.com/images/cfbc067a1445d5baa5ca36cc2642a6c4/tenor.gif?itemid=5664724", // loli D:
        "https://media.giphy.com/media/11tTNkNy1SdXGg/giphy.gif", // inside out
        "https://media.giphy.com/media/ZebTmyvw85gnm/giphy.gif", // PANDA LOCO
        "https://media.giphy.com/media/13bQmUF7BzPO37Wiye/giphy.gif", // detective pikachu
        "https://media.giphy.com/media/11u2JnMZwQVm3S/giphy.gif", // rey leon
        "https://media.giphy.com/media/ntjBjvfnakKJ2/giphy.gif", // tom y jerry
        "https://media.giphy.com/media/12lV980pEpWM9i/giphy.gif", // hercules, hade
        "https://media.giphy.com/media/Vzku9jyuef09G/giphy.gif", // john cena
        "https://media.giphy.com/media/SiItwB3nrAZuRKl3vP/giphy.gif", // unyikitty
        "https://media.giphy.com/media/l396QehilGkfZzsQw/giphy.gif", // angry birds
        "https://media.giphy.com/media/pYI1hSqUdcBiw/giphy.gif", // bob esponja don cangrejo
        "https://media.giphy.com/media/90FH7I3McAQ7u/giphy.gif", // bob esponja
    ] 
  if (user){ // bailar con
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Esta enojabe con **"+user+"**!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
  } else {
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Esta enojabe!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
  }
}      