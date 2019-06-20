//CONTENIDO DEL BOT
const db = require('mega-dtbs');
let prefix_db = new db.crearDB("prefixes");
let logs_db = new db.crearDB("channellogs")

// =
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
// listen for requests :)
// =
const Discord = require("discord.js");

const sql = require('sqlite')
 sql.open('./warn.sqlite') 

const client = new Discord.Client()

client.on('message',async message => {
  if (!message.guild) return;
  if (message.member.bot) return;
  
  let prefix;
if(prefix_db.tiene('${message.guild.id}')) {  
prefix = await prefix_db.obtener('${message.guild.id}')
} else {
prefix = "+"

}

if (!message.content.startsWith(prefix)) return;    
  const args = message.content.slice(prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();   
  
  try {
    
    let comando = require("./en/" + command + ".js");
    if (!comando) return;
    comando.run(client, message, args);
  } catch (err) {
    client.channels.find(c => c.id == "536997103356870677").send("```" + err + "```");
  } finally {
    
  };
});

client.login("process.env.BOT_KEY"); 
/////////////////



///////////////// variables unicas (que solo se ejecutan 1 vez)
const actividades = [
    "+ayuda | comandos.",
    "lamer a Demi",
    "programar",
    "esconderme",
    "vigilar",
    "ser lindo",
    "la pelota",
    "dormir con Demi",
    "morder a Pao",
    ];

let sector = 0;
var puntero = "⇢ ";

client.on('ready', () => {
    setInterval(() => {
 const index = Math.floor(Math.random() * (actividades.length - 1) + 1); // Genera un numero aleatorio entre 1 y la longitud de la lista de actividades.
        client.user.setPresence({
        status: "online",
        game: {
            name: actividades[index],
            type: "PLAYING"
        }
    })
    }, 20000); // Este es el tiempo en el que cada vez cambiara la actividad. (en milisegundos)
  // animacion
    setInterval(() => { ////// HORAS
// FUNCION
function tiempo(offset) {
  
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000*offset));

    //
    var minutos = nd.getMinutes();
  
    if (minutos < 10){ var minutos_fix = "0"+minutos}
    else {var minutos_fix = minutos;}
  
    //
    var horas = nd.getHours();
    if (horas > 12 && minutos_fix > 0) var mm = "p. m.";
    else {var mm = "a. m.";}
  
    var horas_fix = horas%12;
    if (horas_fix == 0) horas_fix = 12;
  
    //
    return horas_fix+":"+minutos_fix+" "+mm;
}
var d2 = new Date();

//var dia = d2.getDay();   
//var mes = d2.getMonth();
  
/// Vars
const horas = [
    puntero+"Mexico: "+tiempo('-6'),
    puntero+"Colombia: "+tiempo('-5'),
    puntero+"Argentina: "+tiempo('-3'),
    puntero+"Venezuela: "+tiempo('-4'),
    puntero+"España: "+tiempo('+2'),
    //puntero+"Fecha: "+dia[dias]+"/"+meses[mes]+"/"+fix_ano, //
    ];
    // Temporizador
      
      if (sector => 5) sector = 0;
      sector += 1;
      client.channels.get("561695655345782785").setName(horas[sector]);
    }, 5000);
});
// animacion
/*
const animacion = [
  "⇢", "⇢ ","⇢ C","⇢ Ca","⇢ Cat","⇢ Cat C",
  "⇢ Cat Ch","⇢ Cat Cha","⇢ Cat Chat",
  "⇢ Cat Chat ⇠", "⇢ Cat Chat ⇠",
];
var sector2 = 0;
setInterval(() => { 
  sector2 ++;
  if (sector2 > animacion.length) sector2 = 0;
  client.channels.get("562680250585055232").setName(animacion[sector2]);
}, 400);
*/
/////////////////
client.on("guildMemberAdd", member => { // dar rol
    let rol = member.guild.roles.get("561284347823521811")
    if(!rol) return;
    member.addRole(rol.id).catch(err => console.log(err))
});
/*
client.on("guildMemberAdd", (member) => {
    let canal = client.channels.get('502877069873643530');
    
    canal.send(`💙 **¡Denle la bienvenida a ** ${member.user} **!** 💙\n⇢ Esperemos que te agrade mucho el servidor.`);
    //canal.send(`Puedes escoger un color para tu nick en el canal #┋🎨┋colores`);
})
*/
//////// REACCIONES ///////
client.on('message', (message) => { // message.author
  if (!message.guild) return;
  if (message.member.bot) return; 
  if (message.content.startsWith("Pale") || message.content.startsWith("pale")){
    message.react("💖");
    //message.channel.sendMessage("");
  }
});
client.on('message', (message) => { // message.author
  if (!message.guild) return;
  if (message.member.bot) return; 
  if (message.content.startsWith("Samolo") || message.content.startsWith("samolo")){
    message.react("🥚");
    //message.channel.sendMessage("");
  }
});
client.on('message', (message) => { // message.author
  if (!message.guild) return;
  if (message.member.bot) return; 
  if (message.content.startsWith("Maduro") || message.content.startsWith("maduro")){
    message.react("😡");
    message.channel.sendMessage("Coño e tu madre");
  }
});
client.on('message', (message) => { // message.author
  if (!message.guild) return;
  if (message.member.bot) return; 
  if (message.content.startsWith("Diego") || message.content.startsWith("diego")){
    message.react("😎");
    //message.channel.sendMessage("");
  }
});
client.on('message', (message) => { // message.author
  if (!message.guild) return;
  if (message.member.bot) return; 
  if (message.content.startsWith("Noe") || message.content.startsWith("noe")){
    message.react("🥖");
    //message.channel.sendMessage("");
  }
});
client.on('message', (message) => { // message.author
  if (!message.guild) return;
  if (message.member.bot) return; 
  if (message.content.startsWith("Demi") || message.content.startsWith("demi")){
    message.react("👌");
  }
});
client.on('message', (message) => { // message.author
  if (!message.guild) return;
  if (message.member.bot) return; 
  if (message.content.startsWith("Yuma") || message.content.startsWith("yuma")){
    message.react("🍡");
  }
});
client.on('message', (message) => { // message.author
  if (!message.guild) return;
  if (message.member.bot) return; 
  if (message.content.startsWith("Cabro qliao")){
    var embed = new Discord.RichEmbed()
    .setImage("https://cdn.discordapp.com/attachments/502877069873643530/562111019946737666/948.gif");
    message.channel.sendMessage(embed);
  }
});
client.on('message', (message) => { // message.author
  if (!message.guild) return;
  if (message.member.bot) return; 
  if (message.content.startsWith("nice")  || message.content.startsWith("Nice")){
    var embed = new Discord.RichEmbed()
    .setImage("https://cdn.discordapp.com/attachments/560931034225704975/562768758461038594/cat3.png");
    message.channel.sendMessage(embed);
  }
});
client.on('message', (message) => { // message.author
  if (!message.guild) return;
  if (message.member.bot) return; 
  if (message.content.startsWith("No lo se rick")  || message.content.startsWith("no lo se rick")){
    var embed = new Discord.RichEmbed()
    .setImage("https://media.giphy.com/media/3o8dFHaKKXaCxosgw0/giphy.gif");
    message.channel.sendMessage(embed);
  }
});
client.on('message', (message) => { // message.author
  if (!message.guild) return;
  if (message.member.bot) return; 
  if (message.content.startsWith("Crash")  || message.content.startsWith("crash")){
    var embed = new Discord.RichEmbed()
    .setImage("https://cdn.discordapp.com/attachments/560930278164398081/568596507700494336/JPEG_20190418_174642.jpg");
    message.channel.sendMessage(embed);
  }
});
/////////////////////////// Sistema de seguridad [Eficiencia del 70%]
/*
client.on('message', (message) => { // Autorizar
  // 
  if (!message.guild) return;
  if (message.member.bot) return; 
  //
  if (message.channel.id === '497977156349984768') {
  //
    if (
          message.content.startsWith("Nombre") || message.content.startsWith("nombre")
       || message.content.startsWith("Edad") || message.content.startsWith("edad") 
       || message.content.startsWith("Genero") || message.content.startsWith("genero")
       || message.content.startsWith("Pais") || message.content.startsWith("pais")
       || message.content.startsWith("País") || message.content.startsWith("país")
       || message.content.startsWith("Gustos") || message.content.startsWith("gustos")
      )
    {
      // Si manda lo de arriba
    /*
    if (
      message.content.includes("polla") || message.content.includes("verga") ||
      message.content.includes("culo") || message.content.includes("ano") ||
      message.content.includes("trasero") || message.content.includes("an0") ||
      message.content.includes("violar") || message.content.includes("vagina") ||
      message.content.includes("idiota") || message.content.includes("") ||
      message.content.includes("we") || message.content.includes("we") ||
      message.content.includes("we") || message.content.includes("we") ||
    ) {
      message.author.send("Nop");
    }
    
    } else { // Si no envian presentacion borrar
if(!message.member.roles.find(r => r.name === "〘🔰〙Miembro")) {
message.delete();
message.author.send(
"**Introducción Inválida.**\n```Asegurate de escribir tu introducción con el formato adecuado ubicado en el canal -Inicia aqui-.```");
}
    }
  } else {
    // no estar en introduccion
  }
});
*/
// ================= Entrar en el server y borrar el mensaje
client.on('message', (message) => { // Autorizar
  // 
  if (!message.guild) return;
  if (message.member.bot) return; 
  //
  if (message.channel.id === '556983042426667012') {
  //
      message.delete();
  } else {
    // no estar en introduccion
  }
});


/*
    let online = false;  
    let cancion = 0;  
    let recorrer = 0;
client.on('message', (message) => { // musica
  // variables
    let lista = [
      "",
      "",
     "",
    ]; // lista
    const prefix = "+";
    const args = message.content.slice(prefix.length).split(/ +/g);
    let link = args.join(" ");
    const ytdl = require('ytdl-core');
    let voiceChannel = message.member.voiceChannel;

    //
    if (message.content.startsWith("+musica")){
    if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
    if(!link) return message.channel.send('Ingrese un enlace de youtube para poder reproducirlo.');
    if (!online) {
  // Reproducir
    voiceChannel.join()
      .then(connection => {
      // 
        online = true;
        lista[cancion] = link; // añade la primera cancion a la posiscion 0
        lista ++;
      //
        const url = ytdl(link, { filter : 'audioonly' });
        const dispatcher = connection.playStream(url); // reproducir esto
        message.channel.send('💿 **Reproduciendo:** '+ lista[cancion]);
        // Finalizar
        dispatcher.on('end', () => {
        // Se activa cuando la transmisión/canción ha terminado.
        const url = lista[recorrer];
        recorrer++;
        message.channel.send("Reproduciendo ahora");
        });
      //
      })
      .catch(console.error);
    } else { // Cuando esta reproduciendo una cancion
      lista[cancion] = link;
      message.channel.send('Tu cancion se ha añadido a una lista de espera: '+ lista[cancion]);
    }
  
  //
  }



});



// musica
*/
