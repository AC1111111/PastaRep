const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('getpfp')
        .setDescription("Get any member's pfp")
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('Nice pfp, would be a shame if I yoinked it')
                .setRequired(true)),
    async execute(interaction) {
        const target = interaction.options.getUser('target') ?? '';
        const embed = new EmbedBuilder()
            .setTitle(`${target.username}'s pfp`)
            .setImage(target.displayAvatarURL({ format: 'png', size: 2048, dynamic: true }));
        await interaction.reply({embeds: [embed] });
    },
};