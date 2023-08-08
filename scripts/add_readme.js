import inquirer from "inquirer"
import fs from 'fs'
import { getReadMe } from './helpers.js'

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your project\'s title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project\'s description?',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Any installation instructions for your project?',
    },
    {
        type: 'input',
        name: 'information',
        message: 'What is your project\'s usage information',
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'What are your project\'s contribution guidelines?',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'What are your project\'s test instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is your project\'s license?',
        choices: ['MIT', 'Apache','Boost', 'Eclipse']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }

])

.then((answers) => {
    const readmeContent = getReadMe(answers)
    fs.writeFile('testreadme.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created testreadme.md')
    )
})


.catch(error => console.log(error))

