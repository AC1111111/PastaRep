const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embedfail')
        .setDescription('Nice Embed PAL')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('Do it to this mf')
                .setRequired(false)),
    async execute(interaction) {
        const target = interaction.options.getUser('target') ?? '';
        const embed = new EmbedBuilder()
            .setImage('https://cdn.discordapp.com/attachments/1191016756333007019/1204018781282762802/jesus-ballin-mars-bars.gif?ex=65d334df&is=65c0bfdf&hm=cdc41e5d02969de3a543b120dd04a7fb2181ac478d306419a99622abb928d5f7&');
        await interaction.reply({content: `${target}`, embeds: [embed] });
    },
};