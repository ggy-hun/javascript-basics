// const dictionary = ['apple', 'potato', 'dog', 'cat', 'car', 'house', 'breadcrumb', 'aeroplane'];
// const word = [];
// const guessedWord = [];
// let life = 5;

// const generateWord = () => {
//   const i = Math.floor(Math.random() * dictionary.length);
//   word.push((dictionary[i]));
//   let j = dictionary[i].length;
//   while (j > 0) {
//     guessedWord.push('_');
//     j--;
//   }
//   life = Math.round(dictionary[i].length / 2);
// };

// const printGame = () => {
//   guessedWord.join(', ');
// };

// const isSolved = () => {
//   if (guessedWord.includes('_')) {
//     console.log('A szó még tartalmaz _ -t!');
//   } else {
//     console.log('A szó meg lett fejtve!');
//   }
// };

// const makeGuess = () => {

// }

// generateWord();
// console.log(word);
// console.log(guessedWord);
// console.log(life);
// printGame();
// isSolved();

const readLine = require('readline-sync');

const dictionary = ['cica', 'kutya', 'panzerkampfwagen'];
let word = '';
const guessedWord = [];
let life = 5;

const generateWord = () => {
  const randomIndex = Math.floor(Math.random() * dictionary.length);
  word = dictionary[randomIndex];
  for (let i = 0; i < word.length; i++) {
    guessedWord.push('_');
  }
  life = Math.round(word.length / 2);
};

const printGame = () => {
  console.log();
  for (let i = 0; i < guessedWord.length; i++) {
    process.stdout.write(guessedWord[i] + ' ');
  }
  console.log();
  console.log('Life: ', life);
};

const isSolved = () => {
  for (let i = 0; i < guessedWord.length; i++) {
    if (guessedWord[i] === '_') {
      return false;
    }
  }
  return true;
};

const makeGuess = (char) => {
  let isFound = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      guessedWord[i] = char;
      isFound = true;
    }
  }
  return isFound;
};

const main = () => {
  generateWord();
  console.log('Welcome to the Hangman game!');
  printGame();
  while (life > 0 && !isSolved()) {
    const char = readLine.keyIn('Press a character key!');
    const isFound = makeGuess(char);
    if (!isFound) {
      life--;
    }
    printGame();
  }
  if (life === 0) {
    console.log('You loose, the word was: ', word);
  } else {
    console.log('You won!');
  }
};

main();
