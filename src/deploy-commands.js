const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('../config.json');
// this shit dont work wtf
const commands = [
	new SlashCommandBuilder().setName('user').setDescription('sets the user thing'),
	new SlashCommandBuilder().setName('ping2').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('ping3').setDescription('Replies with pong!'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('created commands', commands))
	.catch(console.error);