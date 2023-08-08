export const getReadMe = (answers) => {
    return  `
# Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Contributing](#contributing)
 * [Tests](#Tests)
 * [License](#License)
 * [Contact](#Contact)

## Description
${answers.description}

## Installation
${answers.install}

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

