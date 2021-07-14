// Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);

// TODO: Create an array of questions for user input
const questions = [

    questionOne = {
        type: `input`,
        name: `gitRepo`,
        message: `What is your Github Repository called?`
    },

    questionTwo = {
        type: `input`,
        name: `projTitle`,
        message: `What is the name of your project?`,
    },

    questionThree = {
        type: `list`,
        name: `license`,
        message: `Which license would you like to use?`,
        choices: [`GNU AGPLv3`, `GNU GPLv3`, `GNU LGPLv3`, `Mozilla Public License 2.0`, `Apache License 2.0`, `MIT License`, `Boost Software License 1.0`, `The Unlicense`]
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {}


// Function call to initialize app
init();
