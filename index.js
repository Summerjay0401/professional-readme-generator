const fs = require('fs/promises');
const inquirer =require('inquirer');

const { generateMarkdown } = require('./utils/generateMarkdown.js');

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

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README.md file has been generated");
    });
}

function init() {

    inquirer.prompt (questions).then(({username, emailaddress, projectname, description, license, installation, tests, repoInfo, contribution, features}) => {
        
        const myReadMe = generateMarkdown({username, emailaddress, projectname, description, license, installation, tests, repoInfo, contribution, features});
        
        writeToFile("dist/README.md", myReadMe);

    });

}

// Function call to initialize app
init();
