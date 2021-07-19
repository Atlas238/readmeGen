// Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const markdown = require(`./utils/generateMarkdown`)

// Create an array of questions for user input
const questions = [
    {
        type: `input`,
        name: `gitRepo`,
        message: `What is your Github Repository called?`
    },
    {
        type: `input`,
        name: `gitUsername`,
        message: `What is your Github Username?`
    },
    {
        type: `input`,
        name: `title`,
        message: `What is the name of your project?`,
    },
    {
        type: `list`,
        name: `license`,
        message: `Which license would you like to use?`,
        choices: [`GNU AGPLv3`, `GNU GPLv3`, `GNU LGPLv3`, `Mozilla Public License 2.0`, `Apache License 2.0`, `MIT License`, `Boost Software License 1.0`, `The Unlicense`]
    },
    {
        type: `input`,
        name: `description`,
        message: `Please write a brief description of your project: `,
    },
    {
        type: `input`,
        name: `installation`,
        message: `Please write any installation instructions necessary for your project: `
    },
    {
        type: `input`,
        name: `usage`,
        message: `Please outline the usage of your project: `
    },
    {
        type: `input`,
        name: `credits`,
        message: `Please list any collaborator credits you would like to include: `
    },
    {
        type: `input`,
        name: `features`,
        message: `If applicable, please list any unique features of your project: `
    },
    {
        type: `input`,
        name: `contribute`,
        message: `If applicable, please detail contribution steps other developers should take: `
    },
    {
        type: `input`,
        name: `tests`,
        message: `If applicable, please outline any testing procedures you may have included in your project: `
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        if (err)
            console.error(err);
        else {
            console.log(`Your README.md has geen generated!`);
        };
    });
}



// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const output = (`../output/yourNewREADME.md`);
        writeToFile(output, (markdown.generateMarkdown(answers)));
    });
}

// Function call to initialize app
init();
