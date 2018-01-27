// dependency for inquirer npm package
var inquirer = require('inquirer');

// constructor function used to create player objects
function player (name){
	this.name = name;

}

player.prototype.printInfo = function(){
	console.log("Name: " + this.name)
}

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement
inquirer.prompt([
	{
    name: "name",
    message: "What is your name?"
  },
	{
    name: "Letter",
    message: "guess the Letter"
  }
]).then(answers => {
	 chosenLetter = answers.Letter;
  console.log(chosenLetter);
});

module.exports = inquirer.chosenLetter;

