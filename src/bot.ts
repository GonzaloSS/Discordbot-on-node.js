import { config } from 'dotenv'
config();


import { Client, Message } from 'discord.js'
import { prefix } from "./config.json"
const client: Client = new Client()

client.on('ready', () => {
    console.log('Bot is ready!');
})

client.on('message', (message: Message) => {
    if (message.content.startsWith(`${prefix}info`)) {
message.channel.send('This is an example of how works the (message.channel.send')
    }
    if (message.content.startsWith(`${prefix}event`)) {
        message.reply('This is an example of how works the (message.reply)')
    }
    
    })

client.login(process.env.DISCORD_TOKEN);