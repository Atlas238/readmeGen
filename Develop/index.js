// Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const markdown = require(`./utils/generateMarkdown`)

// Create an array of questions for user input
const questions = [

    questionOne = {
        type: `input`,
        name: `gitRepo`,
        message: `What is your Github Repository called?`
    },

    questionTwo = {
        type: `input`,
        name: `title`,
        message: `What is the name of your project?`,
    },

    questionThree = {
        type: `list`,
        name: `license`,
        message: `Which license would you like to use?`,
        choices: [`GNU AGPLv3`, `GNU GPLv3`, `GNU LGPLv3`, `Mozilla Public License 2.0`, `Apache License 2.0`, `MIT License`, `Boost Software License 1.0`, `The Unlicense`]
    },

    questionFour = {
        type: `input`,
        name: `description`,
        message: `Please write a brief description of your project: `,
    },

    questionFive = {
        type: `input`,
        name: `installation`,
        message: `Please write any installation instructions necessary for your project: `
    },

    questionSix = {
        type: `input`,
        name: `usage`,
        message: `Please outline the usage of your project: `
    },

    questionSeven = {
        type: `input`,
        name: `credits`,
        message: `Please list any collaborator credits you would like to include: `
    },

    questionEight = {
        type: `input`,
        name: `features`,
        message: `If applicable, please list any unique features of your project: `
    },

    questionNine = {
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
    let dataObj = {}

    inquirer.prompt([
        questions[0],
        questions[1],
        questions[2],
        questions[3],
        questions[4],
        questions[5],
        questions[6],
        questions[7],
        questions[8],
    ]).then((answers) => {
        dataObj.title = answers.title;
        dataObj.gitRepo = answers.gitRepo;
        dataObj.description = answers.description;
        dataObj.installation = answers.installation;
        dataObj.usage = answers.usage;
        dataObj.credits = answers.credits;
        dataObj.licenseBadge = markdown.renderLicenseBadge(answers.license);
        dataObj.licenseLink = markdown.renderLicenseLink(answers.license);
        dataObj.licenseSection = markdown.renderLicenseSection(answers.license);
        dataObj.features = answers.features;
        dataObj.tests = answers.tests;
        
        writeToFile(`YourNewREADME.md`, (markdown.generateMarkdown(dataObj)));
    });
}

// TODO: Ask about how to use iterative loop inside inquirer...
// function init() {
//     inquirer.prompt([
//         questions.forEach() => .prompt ?
//  Need async await? 
//     ]).then((answers) => console.log(answers))
// }


// Function call to initialize app
init();
