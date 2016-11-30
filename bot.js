const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'hi') {
    message.reply('hello!');
  }
});

client.on('message', message => {
  if (message.content === '!!help') {
    message.reply('Im fierybot! Im under development! NO commands for now!');
  }
});

client.on('message', message => {
  if (message.content === '!!andrei') {
    message.reply('Hes my developer! ');
  }
});

client.login('MjUyNjA1Nzc2MDA5MzYzNDY2.Cx26KA.kUCNpr9yZ5qpymeqD4D1Cbkghok');
