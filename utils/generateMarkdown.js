// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "None Apply") {
    return '';
  } else {
    return `
![License](https://img.shields.io/static/v1?label=license&message=${license}&color=blue)
`}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "None Apply") {
    return '';
  } else {
    return `
License link:
https://choosealicense.com/licenses/${license}/
`}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "None Apply") {
    return '';
  } else {
    return `
## License
This application is covered under ${license} licensing
`}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, contribution, test, license, github, email } = data;

  let licenseBadge = renderLicenseBadge(license)
  let licenseSection = renderLicenseSection(license)

  return `
${renderLicenseBadge(license)}
# ${title}
## Description
${description}
## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Contributing
${contribution}

${renderLicenseSection(license)}
${renderLicenseLink(license)}

## Tests
${test}

## Questions

If you have any questions regaurding this project, please feel free to contact me via:

* Github: https://github.com/${github}
* Email: ${email}
  `;
};

module.exports = generateMarkdown;
