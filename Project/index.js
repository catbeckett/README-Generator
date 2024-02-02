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
            message: "Installation instructions:",
            name: "installation"
        },
        {
            type: "input",
            message: "Usage information:",
            name: "usage"
        },
        {
            type: "input",
            message: "Contribution guidelines:",
            name: "contribution"
        },
        {
            type: "input",
            message: "Test instructions:",
            name: "tests"
        },
        {
            type: "input",
            message: "GitHub username:",
            name: "github"
        },
        {
            type: "input",
            message: "Email address:",
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
        await fs.writeFile(filename, markdownContent);
    } catch (err) {
        console.log("Error writing to file", err);
    }
}

main();
