// import inquirer
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word"
    }]);
const words = answer.sentence.trim().split(" ");
console.log(`Your sentence has ${words.length} words`);
console.log(words);
