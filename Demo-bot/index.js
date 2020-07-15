const Discord = require('discord.js');
const {client, Client, RichEmbed} = require('discord.js');
const member = require('discord.js');
const fs = require('fs');

const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', () => {
	console.log(`${bot.user.username} is online!`)
	bot.user.setActivity("DemoFarms!", {type: "WATCHING"});
});

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = '.';
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice[0];
    let msg = message;

	if(message.content.toLowerCase().includes('lol')) {
		message.react('😂')
	}

	if(message.content.toLowerCase().includes('sad')) {
		message.react('😔')
	}

	if(message.content.toLowerCase().includes('happy')) {
		message.react('🙂')
	}

	if(message.content.toLowerCase().includes('yay')) {
		message.react('🥳')
	}

	
})


bot.login('NzAwMzIyMjc2MTkyODEzMTI4.Xt9s7Q.t5cy7DbQQQIjgnKKsj_0VaquLhw');