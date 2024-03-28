import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 15000;
let myPin = 9876;
console.log(chalk.bgRedBright("Welcome to ATM Service!"));
let pinAnswer = await inquirer.prompt([{
        name: "Pin",
        message: "Please enter your pin code:",
        type: "number",
    }]);
if (pinAnswer.Pin === myPin) {
    console.log(chalk.green("Correct Pin Code!"));
    let operationAns = await inquirer.prompt([{
            name: "Operations",
            message: "Please select any one option:",
            type: "list",
            choices: ["With Draw", "Check Balance", "Cash 1000", "Cash 5000", "Cash 10000", "Cash 15000", "Deposit", "fast cash"]
        }]);
    if (operationAns.Operations === "With Draw") {
        let amountAns = await inquirer.prompt([{
                name: "Amount",
                message: "Please enter your amount:",
                type: "number",
            }]);
        if (amountAns.Amount <= myBalance) {
            myBalance = myBalance - amountAns.Amount;
            console.log(chalk.yellow(`Your remaining balance is ${myBalance}`));
        }
        else {
            console.log(chalk.red("Sorry! You have insufficient balance."));
        }
    }
    else if (operationAns.Operations === "Check Balance") {
        console.log(chalk.green(`Your current balance is ${myBalance} `));
    }
    else if (operationAns.Operations === "Cash 1000") {
        myBalance -= 1000;
        console.log(chalk.green(`Your remaining balance is ${myBalance}`));
    }
    else if (operationAns.Operations === "Cash 5000") {
        myBalance -= 5000;
        console.log(chalk.green(`Your remaining balance is ${myBalance}`));
    }
    else if (operationAns.Operations === "Cash 10000") {
        myBalance -= 10000;
        console.log(chalk.green(`Your remaining balance is ${myBalance}`));
    }
    if (operationAns.Operations === "Deposit") {
        let depositAns = await inquirer.prompt([
            {
                name: "deposit",
                type: "number",
                message: "how much amount you want to deposit?",
            }
        ]);
        console.log(chalk.yellow("Your new account balance is ", myBalance + depositAns.deposit));
    }
    else if (operationAns.Operations === "fast cash") {
        let fastcash = await inquirer.prompt([
            {
                name: "amount",
                message: "choose your amount please!",
                type: "list",
                choices: ["1000", "5000", "10000", "15000"]
            }
        ]);
        console.log(fastcash.amount);
        if (fastcash.amount < myBalance) {
            let newBalance = myBalance - fastcash.amount;
            console.log(chalk.yellow(`Your remaining balance is: ${newBalance}`));
        }
        else {
            console.log(chalk.redBright("Sorry ! Insufficient balance."));
        }
    }
}
else {
    console.log(chalk.red(" Incorrect Pin Code!"));
}
;
