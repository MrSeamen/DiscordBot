const { Client, Events, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');
const { discordEventListener } = require('./eventHandler');
const { commandListener, getCommands } = require('./commandHandler');
dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

client.commands = new Collection();
getCommands(client.commands.set(command.data.name, command));
commandListener(client);
discordEventListener(client);

client.login(process.env.BOT_TOKEN);