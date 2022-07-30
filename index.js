// TODO: Include packages needed for this application
const fs = require('fs/promises');
const inquirer =require('inquirer');

const {
    generateMarkdown,
    renderLicenseBadge,
    renderLicenseLink,
    renderLicenseSection
} = require('./utils/generateMarkdown.js');

const readMeTemplate = ({username, emailaddress, projectname, description, license, installation, tests, repoInfo, contribution, features})=>{
    return `
# ${projectname ?? ""}
${renderLicenseBadge(license)}

## Description

${description ?? ""}


## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Features](#features)
- [Tests](#tests)

## Installation

${installation ?? ""}

## Usage

${repoInfo ?? ""}

${renderLicenseSection(license)}

${renderLicenseLink(license)}


## Features

${features ?? ""}

## Tests

${tests ?? ""}

## Questions
Feel free to contact me for more questions.
* Find me on GitHub: https://github.com/${username ?? ""}
* E-mail: ${emailaddress ?? ""}
    `
}

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    }, 
    {
        type: "input",
        message: "What is your email address?",
        name: "emailaddress",
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "projectname",
    }, 
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "description",
    }, 
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices:[
            "MIT License", 
            "GPL License", 
            "Mozilla", 
            "Apache", 
            "N/A",
        ]
    }, 
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation",
    }, 
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
    }, 
    {
        type: "input",
        message: "What does the user need to know about using this repo?",
        name: "repoInfo",
    }, 
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribution",
    },
    {
        type: "input",
        message: "If your project has a lot of features, list them here.",
        name: "features",
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README.md file has been generated");
    });
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt (questions).then(({username, emailaddress, projectname, description, license, installation, tests, repoInfo, contribution, features}) => {
        
        const myReadMe = readMeTemplate({username, emailaddress, projectname, description, license, installation, tests, repoInfo, contribution, features});
        
        writeToFile("README.md", myReadMe);

    });

}

// Function call to initialize app
init();
