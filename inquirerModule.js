// dependency for inquirer npm package
var inquirer = require('inquirer');
var randomWordModule = require ('./randomWord.js');
var letterModule = require ('./letter.js');

var x = randomWordModule.randomWord
console.log(x);


  // runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement
inquirer.prompt([
  {
    name: "Letter",
    message: "guess the Letter"
  }
]).then(answers => {
  
  var newLetter = new letterModule(answers);
  newLetter.replaceLetter(randomWord);

});





