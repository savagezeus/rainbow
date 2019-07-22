const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});

client.on("ready", () => {

  console.log(`Logged in as ${client.user.username}!`);

  client.user.setActivity('NEW SERVER THEME IS HERE', {type: "streaming"})
console.log(`${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.`);
})
 
client.on("message", async (message) => {
	
	let prefix = "+";
	
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	
    const input = message.content.slice(prefix.length).split(' ');
    const cmd = input.shift();
  
if(cmd === `ping`) {
message.channel.send(`Hoold on!`).then(m => {
    m.edit(`🏓 Wew, made it over the ~waves~ ! **Pong!** (Roundtrip took: ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Heartbeat: ` + Math.round(client.ping) + `ms.)`);
    });
 }
if(cmd === `newcommand`) {
message.channel.send(`My new command`)
}
if(cmd === `anothercommand`) {
message.channel.send(`My another command`)
}
if(cmd === `yobot`) {
	
	message.channel.send(`hello sir!`)
	
}
if(cmd === `help`) {
	
	message.channel.send(`**Here the all details**`)
  
    let embed = new Discord.RichEmbed()
    
    .setAuthor(message.author.username)
    .setColor('RANDOM')
    .setDescription("Bot Details")
    .addField("Bot Owner", "@ZEUS (I'M HURT)™ٴ#7111", true)
    .addField("Language", "Javascript Hosted on Heruko 24 hours", true)
    .addField("Features", "Rainbow Roles", true)
    .addField("Invite me", "Click [Here](https://discordapp.com/oauth2/authorize?client_id=602095112687845377&permissions=8&scope=bot)", true)
    .addField("Thanks for making me;D", "@ZEUS (I'M HURT)™ٴ#7111", true)
    .setFooter(client.user.tag)
    .setTimestamp();
    message.channel.send(embed)
	
	
}


if(cmd === `multicolor`) {

let help = message.content.split(' ').slice(1)

if(!help[0] || help[0 === 'help']) return message.channel.send('**Usage: +multicolor <role>**')
	
let colors = ['RANDOM'];

let role = message.mentions.roles.first();

if(!role) return message.channel.send(`You didn't metion a valid role or that role does not exist.`)

setInterval(function() {

role.setColor(colors[Math.floor(Math.random() * colors.length)])
 
  }, 3000)

}



if (cmd ===`rgb`) {
	
	message.channel.send('**you dont have login key or its expired**')
	
}

if(cmd ===`multicolor2`) {

let help = message.content.split(' ').slice(1)

if(!help[0] || help[0 === 'help']) return message.channel.send('**Usage: +multicolor2 <role>**')
	
let colors = ['RANDOM'];

let role = message.mentions.roles.first();

if(!role) return message.channel.send(`You didn't metion a valid role or that role does not exist.`)

setInterval(function() {

role.setColor(colors[Math.floor(Math.random() * colors.length)])
 
  }, 1000)

}




});

 

client.login(process.env.BOT_TOKEN);
