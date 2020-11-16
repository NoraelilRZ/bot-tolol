const Discord = require('discord.js');
const { prefix, token } = require('./config.json')
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  if(message.content === "Assalamu'alaikum" || message.content === "assalamu'alaikum" || message.content === "assalamualaikum" || message.content === "Assalamualaikum"){
    message.channel.send(`Wa'alaikumsalam. Selamat datang di Channel "${message.channel.name}".`);
  }
})

client.login(token);