import inquirer from "inquirer";
import fs from "node:fs/promises";
import generateMarkdown from "./utils/generateMarkdown.js";

function createQuestions() {
    let questions = [
        {
            type: "input",
            message: "What is your project title?",
            name: "title"
        },
        {
            type: "input",
            message: "Write a short description of your project:",
            name: "description"
        },
        {
            type: "input",
            message: "What are the installation instructions?",
            name: "installation"
        },
        {
            type: "input",
            message: "Please provide usage information:",
            name: "usage"
        },
        {
            type: "input",
            message: "Please provide contribution guidelines:",
            name: "contribution"
        },
        {
            type: "input",
            message: "Please provide test instructions:",
            name: "tests"
        },
        {
            type: "input",
            message: "What is you GitHub username?",
            name: "github"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        }
    ];
    return questions;
}

async function promptUser(questions) {
    let answers = {};
    answers = await inquirer.prompt(questions);
    console.log(answers);
    return answers;
}

async function main() {
    const questions = createQuestions();
    const answers = await promptUser(questions);
    const markdownContent = generateMarkdown(answers);
    await writeToFile("README.md", markdownContent);
}

async function writeToFile(filename, markdownContent) {
    try {
        await fs.writeFile("samples/sample_README.md", markdownContent);
        console.log("Sample README generated successfully.");
    } catch (err) {
        console.error("Error writing to file:", err);
    }
}


main();
