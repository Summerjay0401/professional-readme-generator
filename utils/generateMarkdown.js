// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '## License';
  if(license === 'N/A') {
    return "";  
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};
