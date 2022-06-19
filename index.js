// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// Prompt questions
const promptQuestions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
              if (titleInput) {
                return true;
              } else {
                console.log('Please enter a title for your project!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project',
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('Please enter a description of your project!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter instructions on how to install this application'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter a description of how to use this application'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter information regaurding all contributions to this project'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide information on how to test this application'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose which license was used, if any',
            choices: ['Apache-2.0', 'BSD-2-Clause', 'BSD-3-Clause', 'AGPL-3.0', 'MIT', 'MPL-2.0', 'EPL-2.0', 'None Apply']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username?',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please provide your GitHub username!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your E-mail address?',
            validate: titleInput => {
              if (titleInput) {
                return true;
              } else {
                console.log('Please enter your E-mail address!');
                return false;
              }
            }
        },
    ])
    // Return the answers
    .then(data => {
        return data
    });    
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile(fileName, data , err => {
            if (err) {
                console.log(err)
            } else {
                console.log("README.md has been created")
            }
        });
}

// TODO: Create a function to initialize app
const init = () => {
}

// Function call to initialize app
init();