
const Discord = require("discord.js")
exports.run = (client, message, args) => {
if(message.author.id !== "450417543354515458" & message.author.id !== "531890793057878056") return message.channel.send("**Developer only**");
if (!args) {
  args = null;
}  
let Canalvoz = message.member.voiceChannel;

if(!Canalvoz) {
    message.channel.send('No estas conectado a un canal de voz.');

} else {
    message.channel.send('Dejando el canal de voz.').then(() => {
        Canalvoz.leave();

    }).catch(error => console.log(error));

} 
}

