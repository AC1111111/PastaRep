const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Please Work, I beg'),
    async execute(interaction){
        await interaction.reply('Fuck you');
    },
};