//The spaghetti in this codetti boutta go hard as fuck
//Now the right way to handle this would be to get a random gif from the tenor API
//but the API is kinda fucked
//And no one's gonna notice, right?

const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pasta')
        .setDescription('Say my name'),
    async execute(interaction) {
        var link = '';
        switch(Math.floor(Math.random()*10)){
            case 0:
                link = 'https://media1.tenor.com/m/7G6-hB2VWWoAAAAd/comida-queso.gif';
                break;

            case 1:
                link = 'https://media1.tenor.com/m/xBx81SFaqCEAAAAC/mac-and-cheese-pasta.gif';
                break;

            case 2:
                link = 'https://media1.tenor.com/m/3iAOj_BtY9gAAAAd/tomato-burrata-pasta-pasta.gif';
                break;

            case 3:
                link = 'https://media1.tenor.com/m/BRqYnE3Pp1UAAAAd/delish-delish-recipes.gif';
                break;

            case 4:
                link = 'https://media1.tenor.com/m/gwUzrCJlBREAAAAC/pasta-salad-salad.gif';
                break;

            case 5:
                link ='https://media1.tenor.com/m/L6nRaHAM_sQAAAAd/mac-and-cheese-cheesy.gif';
                break;
            
            case 6:
                link = 'https://media1.tenor.com/m/VYhc5LiK6lUAAAAC/food-eating.gif';
                break;

            case 7:
                link = 'https://media1.tenor.com/m/9505IkGOlCEAAAAC/mac-and-cheese-pasta.gif';
                break;

            case 8:
                link = 'https://media1.tenor.com/m/sP6EW479wJkAAAAC/mac-and-cheese-pasta.gif';
                break;

            case 9:
                link = 'https://media1.tenor.com/m/y6R5OD66pvcAAAAd/pasta-pasta-recipe.gif';
                break;
        }
        const embed = new EmbedBuilder()
            .setImage(link);
        await interaction.reply({ embeds: [embed] });
    },
};