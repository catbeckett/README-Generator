export default function generateMarkdown(answers) {
  let licenseBadge = "";
  let licenseNotice = "";

  // Determine the license badge and notice based on user's selection
  switch (answers.license) {
    case "MIT":
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      licenseNotice = "This application is covered under the [MIT License](https://opensource.org/licenses/MIT).";
      break;
    case "Apache-2.0":
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      licenseNotice = "This application is covered under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).";
      break;
    // Add more cases for other license options as needed
    default:
      licenseBadge = "";
      licenseNotice = "";
  }

  return `
# ${answers.title}

${licenseBadge} 

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

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

## License

${licenseNotice} 
`;
}
