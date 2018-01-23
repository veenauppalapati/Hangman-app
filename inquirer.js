// dependency for inquirer npm package
var inquirer = require('inquirer');

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement
inquirer.prompt([
	{
    name: "name",
    message: "What is your name?"
  },
	{
    name: "word",
    message: "guess the word"
  }
]).then(answers => {
  console.log(answers);
});