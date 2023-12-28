require('dotenv').config()
const { REST, Routes } = require('discord.js');

//if command grows, do this dynamically for all commands
const commands = [];
const command=require('./commands/trashme')
commands.push(command.data.toJSON());


const rest = new REST().setToken(process.env.DISCORD_BOT_TOKEN);

async function deployCommands () {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);
        console.log
        
		// The put method is used to fully refresh all commands 
		const data = await rest.put(
            Routes.applicationCommands(process.env.APPLICATION_ID),
            { body: commands },
        );

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
}
deployCommands();
