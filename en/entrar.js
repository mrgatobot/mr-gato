/*
const Discord = require("discord.js")
exports.run = (client, message, args) => {
  if(message.author.id !== "450417543354515458" & message.author.id !== "531890793057878056") return message.channel.send("**Developer only**");
if (!args) {
  args = null;

}  
let ping = Math.floor(message.client.ping);
let Canalvoz = message.member.voiceChannel;

if(!Canalvoz || Canalvoz.type !== 'voice') {
    message.channel.send('¡Necesitas unirte a un canal de voz primero!.');

} else if (message.guild.voiceConnection) {
    message.channel.send('Ya estoy conectado en un canal de voz.');

} else {
    message.channel.send('Conectando...').then(m => {
        Canalvoz.join().then(() => {
            m.edit('Conectado exitosamente.').catch(error => console.log(error));

        }).catch(error => console.log(error));

    }).catch(error => console.log(error));
} 
};
*/