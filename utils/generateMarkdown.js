function renderLicenseBadge(license) {
  let yourLicense = ''
  if(license === 'MIT License') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === 'Mozilla') {
    yourLicense = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  } else if (license === 'GPL License') {
    yourLicense = `![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else if (license === 'Apache') {
    yourLicense = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else {
    yourLicense = ''
  }
  return yourLicense;
};

function renderLicenseLink(license) {
  let yourLicenseLink = ''
  if(license === 'MIT License') {
    yourLicenseLink = `(https://opensource.org/licenses/MIT)`
  } else if (license === 'Mozilla') {
    yourLicenseLink = `(https://opensource.org/licenses/MPL-2.0)`
  } else if (license === 'GPL License') {
    yourLicenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === 'Apache') {
    yourLicenseLink = `(https://opensource.org/licenses/Apache-2.0)`
  } else {
    yourLicenseLink = ''
  }
  return yourLicenseLink;
}

function renderLicenseSection(license) {
  let licenseSection = '## License';
  if(license === 'N/A') {
    return '';  
  }
  return licenseSection;
}

function generateMarkdown(data) {
  const {username, emailaddress, projectname, description, license, installation, tests, repoInfo, contribution, features} = data;

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

module.exports = {
  generateMarkdown
};
