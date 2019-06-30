const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let image = [
        "https://i.pinimg.com/originals/64/d7/f3/64d7f3ad3b9f3863480fe65c7ed84dcd.jpg", // nro 1
        "https://i.pinimg.com/originals/5e/c4/80/5ec480ddcab3c63e8592e0522170ae9a.jpg", // nro 2
        "https://i.pinimg.com/originals/6a/9a/c8/6a9ac83c95a44f0d0b0c0a433da54d29.jpg", // nro 3
        "https://3.bp.blogspot.com/-aZUScoN3dKQ/XIUojyC7KAI/AAAAAAAASTk/69CkXGTF9wwikZalMWMHtg48LORJRdGIACLcBGAs/s1600/gatitos%2Btiernos%2B5.jpg", // nro 4
        "https://3.bp.blogspot.com/-dYI-JhmzXas/XFcc9GEf60I/AAAAAAAARsA/D2OgrG0VjXINiceMy7UhQKd8giPozzXjACLcBGAs/s1600/imagenes%2B-%2Bgratis%2B-%2Bde%2B-%2Bgatitos%2B-%2Btiernos%2B-%2Bpara%2B-%2Bdescargar%2B-%2B4.jpg", // nro 5
        "https://4.bp.blogspot.com/-qzu4nbtyym8/XFcc9yq_lYI/AAAAAAAARsI/NF8mk3usKSwMYLi7WlJKmdT6KrF2fWdkwCLcBGAs/s1600/imagenes%2B-%2Bgratis%2B-%2Bde%2B-%2Bgatitos%2B-%2Btiernos%2B-%2Bpara%2B-%2Bdescargar%2B-%2B6.jpg", // nro 6
        "https://1.bp.blogspot.com/-rFSnWDuqx-I/XFcc9xQQhBI/AAAAAAAARsM/dVCCWhH5kqM_HD-d5SmO9N4EXj_GNzbjwCLcBGAs/s1600/imagenes%2B-%2Bgratis%2B-%2Bde%2B-%2Bgatitos%2B-%2Btiernos%2B-%2Bpara%2B-%2Bdescargar%2B-%2B7.jpg", // nro 7
        "https://1.bp.blogspot.com/-mPzTl1VlTbM/XFcc-bT-QLI/AAAAAAAARsQ/SRa_STYeLKs9SpEMcJya2Uses0eY9QYMwCLcBGAs/s1600/imagenes%2B-%2Bgratis%2B-%2Bde%2B-%2Bgatitos%2B-%2Btiernos%2B-%2Bpara%2B-%2Bdescargar%2B-%2B8.jpg", // nro 8
        "https://diseñoscreativos.com/wp-content/uploads/2018/06/Imagenes-de-gatos-www.diseñoscreativos.com-portada-3-1.jpg",
        "https://diseñoscreativos.com/wp-content/uploads/2018/06/Imagenes-de-gatos-www.diseñoscreativos.com-portada-3-1.jpg",
        "https://www.anipedia.net/imagenes/gatos-800x375.jpg",
        "https://cadenaser00.epimg.net/ser/imagenes/2015/10/19/sociedad/1445252095_618647_1445271926_noticia_normal.jpg",
        "https://www.somosmamas.com.ar/wp-content/uploads/2019/04/nombres-para-gatos-grises-rain.jpg",
        "https://estaticos.muymascotas.es/media/cache/1140x_thumb/uploads/images/gallery/5970611b5bafe893953c9869/gato-nina-sillon-parrafo.jpg",
        "https://www.feelcats.com/blog/wp-content/uploads/2018/11/como-juntar-dos-gatos.jpg",
        "https://ichef.bbci.co.uk/news/660/cpsprodpb/8536/production/_103520143_gettyimages-908714708.jpg",
        "https://www.abc.es/media/ciencia/2017/06/13/gatos-twitter1--620x349-kZnH--620x349@abc.jpg",
        "https://rec-eph.primerahora.com/images/tnph3/615/304/1/1/615/304/2017/01/31/crop_crop_crop_801b8a02-7012-4b6d-863f-81a11fb5c024_1.jpg",
        "https://www.purina.es/gato/purina-one/sites/g/files/mcldtz1856/files/2018-06/Como_saber_si_mi_gato_esta_enfermo%20%282%29.jpg",
        "https://lavozdelmuro.net/wp-content/uploads/2017/10/gatos-consejos-y-curiosidades-3.jpg",
        "",
    ] 
  var embed = new Discord.RichEmbed()
  .setTitle("Mira! Un lindo gato.")
  .setColor(3447003)
  .setImage(image[Math.floor(Math.random() * image.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
} 
