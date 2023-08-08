export const getReadMe = (answers) => {
    return  `
# Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Contributing](#contributing)
 * [Tests](#Tests)
 * [License](#License)
 * [Questions](#questions)

## Description
${answers.description}

## Installation
Visual Studio Code and Node.js should be downloaded and installed. Install inquirer in the terminal afterwards.

## Usage
${answers.information}

## Contributing
Pull requests are welcomed.

## Tests
${answers.instructions}

## License
This project is licensed under the ${answers.license} license.

## Contact Info
Please feel free to email me at ${answers.email} for any questions you have.
My GitHub username is ${answers.username}
    `
}

