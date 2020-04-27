const TelegramBot = require('node-telegram-bot-api');
const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, {polling: true});
let exec = require('child_process').exec;
let fs = require('fs');

bot.onText(/del (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  exec('del '+match[1]);
  bot.sendMessage(chatId, 'Файл "'+match[1]+'" был удален!');
});

bot.onText(/copy (.+) (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  exec('copy '+match[1]+' '+match[2]);
  bot.sendMessage(chatId, 'Файл "'+match[1]+'" был скопирован в "'+match[2]+'".');
});

bot.onText(/list (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  fs.readdir(match[1], (err, files) => {
  	if (err) bot.sendMessage(chatId, 'Эта папка не найдена или к ней нет доступа!');

  	let list = '';
  	files.forEach((file) => {
  		list += file + "\n";
  	});

  	bot.sendMessage(chatId, list);

  });
});