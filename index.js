const fs = require('node:fs');
const path = require('node:path');
const {Client, Events, GatewayIntentBits, Collection} = require('discord.js');

//I know that this ain't the right way to do it Byte. We ball.
//OK nvm we don't ball Discord resets the token anytime we try to ball. We do this right.
const { token } = require('./config.json');

//Create client instance
const client = new Client({intents: [GatewayIntentBits.Guilds]});


client.commands = new Collection();

//Console log to check if Pasta's still alive
client.once(Events.ClientReady, readyClient => {
    console.log(`We up ${readyClient.user.tag}`);
});

//Setting up the bot to read the path and all of the commands
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for(const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    for(const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);

        if('data' in command && 'execute' in command){
            client.commands.set(command.data.name, command);
        }
        else{
            console.log(`${filePath} don't got data or execute`);
        }
    }
}


//Listener for the commands
client.on(Events.InteractionCreate, async interaction =>{
    if(!interaction.isChatInputCommand()){
        return;
    }

    const command = interaction.client.commands.get(interaction.commandName);

    if(!command){
        console.error('No matching command found');
        return;
    }

    try{
        await command.execute(interaction);
    } 
    
    catch(error){
        console.error(error);
    }
})


client.login(token);