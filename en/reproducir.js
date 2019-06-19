const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {

    
    let link = args.join(" ");
  
    const ytdl = require('ytdl-core');
    
    let voiceChannel = message.member.voiceChannel;
  
    if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
    if(!link) return message.channel.send('Ingrese un enlace de youtube para poder reproducirlo.');
    voiceChannel.join()
      .then(connection => {
        const url = ytdl(link, { filter : 'audioonly' });
        const dispatcher = connection.playStream(url);
        message.channel.send('💿 **Reproduciendo:** '+ link);
        //message.delete();
      })
      .catch(console.error);
  
  }
