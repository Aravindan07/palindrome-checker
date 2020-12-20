const readlineSync = require('readline-sync');
const chalk = require('chalk');

let name = readlineSync.question(chalk.cyanBright('May I have your name ?\n\n'));
console.log(name);

let word = readlineSync.question(chalk.cyanBright("Type a word to check if it is a palindrome or not \n\n"));

function palindromeCheck(inputWord){
let reversedWord = inputWord.split('').reverse().join('');
if(inputWord.toLowerCase() === reversedWord.toLowerCase()){
  console.log(chalk.yellowBright('\nEntered word is a Palindrome'));
  return "\n";
}
console.log(chalk.redBright('\nEntered word is not a Palindrome.'));
}

palindromeCheck(word);
