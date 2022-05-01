const { Client, Intents } = require('discord.js');
const { token } = require('../config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('teks group helper is running');
});


client.login(token);