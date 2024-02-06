const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('guards')
        .setDescription('Rip off his nutt sack')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('Do it to this mf')
                .setRequired(false)),
    async execute(interaction) {
        const target = interaction.options.getUser('target') ?? '';
        const embed = new EmbedBuilder()
            .setImage('https://cdn.discordapp.com/attachments/1191016756333007019/1198927867665465424/pa8o63l9cvdc1.png?ex=65d32496&is=65c0af96&hm=b1e9bede995d4b6701412c78766ae5c2ad79301eb0b4270cde15ad263e90fe04&');
        await interaction.reply({content: `${target}`, embeds: [embed] });
    },
};