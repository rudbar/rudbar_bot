const TelegramBot = require('node-telegram-bot-api');
const token = '1191897711:AAFnxp7RbdMRhMXK4yi7YCWHIAHDEy4mSI8';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/test/, (msg, match) => {

  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Тест пройден');
});