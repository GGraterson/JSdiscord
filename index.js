const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Ur retarted');
  }
});

client.login('NjkwMjc2NTQ4ODUwMzUyMzIw.XnPNgA.5SRYPPjx-trCjWyMlQcAT5Eccu4');