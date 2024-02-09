const fs = require('node:fs');
const path = require('node:path');
const { MongoClient, ServerApiVersion } = require('mongodb');
const {Client, Events, GatewayIntentBits, Collection} = require('discord.js');

//I know that this ain't the right way to do it Byte. We ball.
//OK nvm we don't ball Discord resets the token anytime we try to ball. We do this right.
const { token } = require('./config.json');

//Create client instance
const client = new Client({intents: [GatewayIntentBits.Guilds]});


client.commands = new Collection();

//Build MongoDB URI
const { mongoPassword } = require('./config.json')
const uri = `mongodb+srv://bytezadusto:${mongoPassword}@clusterpasta.ketfdz1.mongodb.net/?retryWrites=true&w=majority`;

//Console log to check if Pasta's still alive
client.once(Events.ClientReady, readyClient => {
    console.log(`We up ${readyClient.user.tag}`);
});


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mongoClient = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
  async function run() {
    try {
      // Connect the client to the server    (optional starting in v4.7)
      await mongoClient.connect();
      // Send a ping to confirm a successful connection
      await mongoClient.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await mongoClient.close();
    }
  }
  run().catch(console.dir);


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