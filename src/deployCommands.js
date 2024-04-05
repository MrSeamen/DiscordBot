const { REST, Routes } = require('discord.js');
const { clientId, token } = require('./config.json');
const fs = require('node:js');
const path = require('node:path');

const commands = [];
getCommands(commands.push(command.data.toJSON()));

const rest = new REST().setToken(token);

(async() => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);
        const data = await rest.put(
            Routes.applicationGuildCommands(clientId),
            {
                body: commands
            },
        );
        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        console.error(error);
    }
})();