const TelegramBot = require('node-telegram-bot-api');
const token = '1191897711:AAFnxp7RbdMRhMXK4yi7YCWHIAHDEy4mSI8';
const bot = new TelegramBot(token, {polling: true});
let exec = require('child_process').exec;

bot.onText(/del (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  exec('del '+match[1]);
  bot.sendMessage(chatId, 'Файл "'+match[1]+'" был удален!');
});