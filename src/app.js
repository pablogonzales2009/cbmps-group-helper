const { Client, Intents } = require('discord.js');
const { token } = require('../config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


client.once('ready', () => {
	console.log('teks group helper is running');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	// put your command functions here
	const commands = {
		'ping': () => (interaction.reply('pong.s')),


	};

	const { commandName } = interaction;
	await commands[commandName];


});


client.login(token);