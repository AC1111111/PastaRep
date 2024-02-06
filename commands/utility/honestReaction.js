const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('honestreaction')
        .setDescription('My honest reaction to this'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setImage('https://cdn.discordapp.com/attachments/1160854054356930563/1163147352081702973/My_Honest_Reaction.mp4?ex=65d22c62&is=65bfb762&hm=916eb0cec3b65762634871d13e56d11da745c88a20b7680b7d93dfb04f53ec9a&');
        await interaction.reply({ embeds: [embed] });
    },
};