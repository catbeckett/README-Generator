export default function generateMarkdown(answers) {
  return `
# ${answers.title}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contribution

${answers.contribution}

## Tests

${answers.tests}

## Questions

For any questions or feedback, feel free to contact me:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
`;
}