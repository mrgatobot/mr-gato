const Discord = require("discord.js")
exports.run = (client, message, args) => {
    let user = message.mentions.users.first();  
    let gifs = [
         "https://media.giphy.com/media/fGOn4fZoBY97P3zIEm/giphy.gif", // malvavisco
         "https://media.giphy.com/media/65HR2UL6nn6XMSUoRA/giphy.gif", // scooby doo
         "https://media.giphy.com/media/2vpeazYyyNWAeygpzt/giphy.gif", // pareja alegre
         "https://media.giphy.com/media/X9Fke7IOkydZkfHBtf/giphy.gif", // perro y humano
         "https://media.giphy.com/media/c71EChsgrHJPq/giphy.gif", // oso y jugador 
         "https://media.giphy.com/media/26ufmAlKt4ne2JDnq/giphy.gif", // manos
         "https://cdn.weeb.sh/images/S1kKq1XiZ.gif", // shokugeki soma
         "https://cdn.weeb.sh/images/rJzn5kms-.gif", // pokemon 
         "https://cdn.weeb.sh/images/Hy_U1QBT-.gif", // re: zero
                 ] 
  if(!user) return message.channel.send('Mencione a un usuario.');
  if(user === message.author) return message.channel.send('No puedes darte chocalas a ti mismo.');
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Dame esos 5** "+user+"**!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)])
  message.channel.send({embed});
}
