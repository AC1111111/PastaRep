const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('chance')
        .setDescription('That dumbass shit Claire says'),
    async execute(interaction){
        await interaction.reply("When Mario leaves his place of safety to stomp a turty, he knows that he may Die. And yet, for a man who can purchase lives with money, a life becomes a mere store of value. A tax that can be paid for, much as a rich man feels any law with a fine is a price. We think of Mario as a hero, but he is simply a one percenter of a more privelaged variety. The lifekind. Perchance.");
    },
};