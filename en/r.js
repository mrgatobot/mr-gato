const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
let online = false;  
let cancion = 0;  

exports.run = (client, message, args) => {

    let lista = [
      "",
      "",
     "",
    ]; // lista
    
  
    let link = args.join(" ");
  
    const ytdl = require('ytdl-core');
    
    let voiceChannel = message.member.voiceChannel;
  
    if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
    if(!link) return message.channel.send('Ingrese un enlace de youtube para poder reproducirlo.');
    if (!online) {
  // Reproducir
    voiceChannel.join()
      .then(connection => {
      // 
        online = true;
        lista[cancion] = link; // añade la primera cancion a la posiscion 1
        lista ++;
      //
        const url = ytdl(link, { filter : 'audioonly' });
        const dispatcher = connection.playStream(url);
        message.channel.send('💿 **Reproduciendo:** '+ lista[cancion]);
        //message.delete();
      })
      .catch(console.error);
    } else { // Cuando esta reproduciendo una cancion
      lista[cancion] = link;
      message.channel.send('Tu cancion se ha añadido a una lista de espera: '+ lista[cancion]);
    }

  }
