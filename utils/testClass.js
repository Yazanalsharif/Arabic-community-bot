const BadWords = require('./BadWords');

const badWords = new BadWords().then(() => {
  console.log(badWords.getWords());
});
