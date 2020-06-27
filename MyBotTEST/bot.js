const Discord = require("discord.js");//Se define Discord
const  client = new Discord.Client();//Se define client usando Discord.Client() 
const config = require('./config.json')//Se define config que seria ./config.json.


let prefix = config.PREFIX//Define prefix con lo que hay adentro de config en la parte de PREFIX
client.on("ready", () => {//Evento de que si se prendió el bot
    console.log("Estoy listo! | ✔️ |");//manda un mensaje a la consola

 });




 client.on("message", (message) => {//evento mensaje

    const args = message.content.slice(prefix.length).trim().split(/ +/g);   //Define args (que contiene cada mensaje)
    const command = args.shift().toLowerCase(); //Define mensaje usando los args


    if(command === '8ball'){//que pasa cuando el jugador pone 8ball
        const texto = args.join(' ')//define texto con los argumentos del texto
        var rpts = ["Sí", "No", "¿Por qué?", "Por favor", "Tal vez", "No sé", "Definitivamente?", " ¡Claro! "," Sí "," No "," Por supuesto! "," Por supuesto que no "];//Se definen las respuestas
        if (!texto) return message.reply(`Escriba una pregunta.`);//Que pasa si no escribe nada
        message.channel.send("**"+message.author.username+'** tu pregunta fue: **'+texto+'**\nrespuesta: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');//se envia la pregunta que puso con una respuesta aleatoria
    
    }
    else if(command === 'X'){//que pasa cuando el jugador no pone 8ball y pone X comando
        //este codigo lo vas hacer vos.
    }
})
client.login(config.TOKEN);//Se inicia el bot con su token