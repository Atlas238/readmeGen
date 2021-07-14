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
        type: ``,
        name: ``,
        message: ``
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {}


// Function call to initialize app
init();
