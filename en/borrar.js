/*
const Discord = require("discord.js")
exports.run = (client, message, args) => { 
  var perms = message.member.hasPermission("BAN_MEMBERS");
  //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tienes el permiso `MANAGE_MESSAGES`.")
      if(!args[0]) return message.channel.send("Pon el número deseado entre 1-100")
      let number = args[0]
      if(isNaN(number)) return message.channel.send("Necesitas escribir un número, no letras ni símbolos.")
      number = parseInt(number)
      if(number >= 100 || number <= 0) return message.channel.send("El valor es inválido.")
      message.channel.bulkDelete(number + 1 ).then( () => {
        message.channel.send(`MR gato Ha borrado ${number} mensajes.`).then(m => m.delete(5000))
      }).catch(error => {
        message.channel.send(`¡UPS! Ha ocurrido un error: ${error.message}`)
      })
  
    }
*/