// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./util/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project? (Required)',
        name: 'title',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Provide a description of your project. (Required)',
        name: 'description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to provide a project description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'Installation'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'Usage'
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'credits'
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'list',
        message: 'What licesnse would you like to use for your project?',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU GPLv3', 'Mozilla Public License 2.0', 'The Unlicense', 'None']
    },
    {
        type: 'input',
        message: 'What steps were taken to test your project?',
        name: 'test'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err);
        } else {
            console.log('success!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
             writeToFile('README.md', generateMarkdown(data));
             console.log(data);
    })
}

// Function call to initialize app
init();

module.exports = questions;
