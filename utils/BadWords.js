const fs = require('fs');
//class bad Words in arabic language
class BadWords {
  constructor() {
    this.badWords = [];
  }

  //add one word to the badWords object
  setWord(word) {
    this.badWords.push(word);
  }

  //this function to add array of words
  setWords(words) {
    this.badWords = this.badWords.concat(words);
  }

  //delete word from the file and the array
  deleteWord(word) {
    this.badWords.pop(word);
  }

  //return array of the bad words
  getWords() {
    return this.badWords;
  }

  getWordsNumbers() {
    return this.badWords.length;
  }

  readFile() {
    return new Promise((resolve, reject) => {
      fs.readFile('./badWords.txt', 'utf-8', (err, data) => {
        if (err) {
          console.log(err);
          return reject(err);
        }

        let words = data.toString();
        words = words.split(' ');
        this.badWords = words;
        return resolve(words);
      });
    });
  }

  //its gives the array and it will handle it and make it string then write it to the file
  writeFile(words) {
    return new Promise((resolve, reject) => {
      words = words.join(' ');
      fs.writeFile('./badWords.txt', words, (err) => {
        if (err) {
          console.log(err.messagge);
          return reject(err);
        }
        return resolve('the word is added successfull to the file');
      });
    });
  }

  checkWords(statment) {
    statment = statment.split(' ');
    let found;
    for (let i = 0; i < statment.length; i++) {
      found = this.badWords.includes(statment[i]);
      console.log(found);
      if (found) {
        return true;
      }
    }

    return found;
  }
}

module.exports = BadWords;
