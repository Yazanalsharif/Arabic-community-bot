//the package that i can create Bot on Telegram
const telegraf = require('telegraf');
//dotenv to fetch data from .env file in cofig Folder
const dotenv = require('dotenv');
//chalk for terminal colors
const chalk = require('chalk');

const BadWords = require('./utils/BadWords');

const badWords = new BadWords();

dotenv.config({ path: './config/.env' });

const bot = new telegraf.Telegraf(process.env.BOT_NAME);

//require the display function to display all buttonst to the bot
const display = require('./utils/display');

bot.help((ctx) => {
  display.introduction(ctx, bot);
});

bot.command('learn', (ctx) => {
  //learn tradign to display the list of tutorials
  display.learnTrading(ctx, bot);
});

bot.command('social', (ctx) => {
  display.socialMedia(ctx, bot);
});

bot.command('apps', (ctx) => {
  display.apps(ctx, bot);
});
bot.command('addword', async (ctx) => {
  //the message command must only run on private message
  if(ctx.message.chat.type !== 'private') {
    console.log(ctx.message.chat)
    return undefined;
  }
//make the bot listen to the command only from 3 persons 
  const accessUserNames = ['Ali_burency', 'Yazan_BurencyTeam', 'Abdalah_BurencyTeam'];

  if(!accessUserNames.includes(ctx.message.from.username)){
    console.log('here1')
    return undefined;
  }

  const word = ctx.message.text.split(' ');
  badWords.setWord(word[1]);
  await badWords.writeFile(badWords.getWords());
  ctx.reply('the word added!');
});

bot.command('deleteword', async (ctx) => {
  //the message command must only run on private message
  if(ctx.message.chat.type !== 'private') {
    console.log(ctx.message.chat)
    return undefined;
  }

  //make the bot listen to the command only from 3 persons 
  const accessUserNames = ['Ali_burency', 'Yazan_BurencyTeam', 'Abdalah_BurencyTeam'];

  if(!accessUserNames.includes(ctx.message.from.username)){
    console.log('here1')
    return undefined;
  }

  const word = ctx.message.text.split(' ');
  badWords.deleteWord(word[1]);
  await badWords.writeFile(badWords.getWords());
  ctx.reply('the word deleted!!');
})

//action learn to give you the list of vidoes which teaching people the trading on burency Exchange
bot.action('learn', (ctx) => {
  //learn function to send the message with new buttons learn
  display.learnTrading(ctx, bot);
});

bot.action('social', (ctx) => {
  display.socialMedia(ctx, bot);
});

bot.action('rules', (ctx) => {
  display.rules(ctx);
});

bot.action('apps', (ctx) => {
  display.apps(ctx, bot);
});

//delete some bad words and etc
bot.on('message', (ctx) => {
  //check the string by class BadWords That i desian
  let isBadWords = badWords.checkWords(ctx.message.text);
  //if the string has bad words then the bot must delete the message
  if (isBadWords) {
    return ctx.deleteMessage(ctx.message.message_id);
  }
});

//catch the error that came from the bot
bot.catch((err, ctx) => {
  console.log(`Ooops, encountered an error for ${ctx.updateType}`, err);
});

bot
  .launch()
  .then(async () => {
    await badWords.readFile();
    console.log(chalk.white.bgGreen.bold('the bot is working Now'));
  })
  .catch((err) => {
    if (err.message) {
      console.log(
        chalk.red.bgRed.bold(`there is some error here ${err.message}`)
      );
    } else {
      console.log(err);
    }
  });

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection', { reason: reason, promise: promise });
});
