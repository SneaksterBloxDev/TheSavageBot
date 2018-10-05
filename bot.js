const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 't!help') {
    	message.reply('```The prefix for TheSavageDevs is t!. This bot is in WIP and will not function as intended. Thank you.```');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
