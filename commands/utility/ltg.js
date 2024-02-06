const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ltg')
        .setDescription('You know exactly what this is')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('Do it to this mf')
                .setRequired(false)),
    async execute(interaction){
        const target = interaction.options.getUser('target') ?? '';
        await interaction.reply(`${target} You are a worthless, bitch ass nigga. Your life literally is as valuable as a summer ant. I'm just gonna stomp you and you're gonna keep coming back, imma seal up all my cracks, you're gonna keep coming back. Why? Cause you smellin the syrup. You worthless bitch ass nigga.You gonna stay on my dick until you die. You serve no purpose in life. Your purpose in life is to be on my stream sucking on my dick daily. Your purpose in life is to be in that chat blowing the dick daily. Your life is nothing, you serve zero purpose. You should kill yourself, NOW.`);
    },
};