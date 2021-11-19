const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");


client.on("ready", () => {
console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`);
client.user.setGame(`Eu estou em ${client.guilds.size} servidores`);
client.user.setPresence({ game: { name: 'comando', type: 1, url: 'https://www.twitch.tv/erykteste'} });
});

client.on("guildCreate", guild => {
    console.log(`O bot entrou nos servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


client.on("message", async message => {
if(message.author.bot) return;
if(message.channel.type === "dm") return;
if(!message.content.startsWith(config.prefix)) return;


const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const comando = args.shift().toLowerCase();

// COMANDO PING
if(comando === "ping") 
    const m = await MessageEvent.channel.send("Ping?")/
    m.edit(`Ppong! A latência é ${m.createdTimestamp - message.createdTimestamp}ms. A latencia da API É ${Math.round(client.ping)}ms`);

});

client.login(config.token);