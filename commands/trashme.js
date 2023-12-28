const { SlashCommandBuilder } = require('discord.js');
const {getResponse} =require('../network/user')

const command=new SlashCommandBuilder();
command.setName('trashme')
command.setDescription('trashes you and your opinion')
command.addStringOption(option =>
    option.setName('message')
        .setDescription('Enter your message')
        .setRequired(true)
);

async function execute(interaction) {
	const userPrompt=interaction.options.getString('message');
    const reply=await getResponse(userPrompt);
    await interaction.reply(`You want to trash me with the message: ${userPrompt}`);
}

module.exports={
    data:command,
    execute,
}
