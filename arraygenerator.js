const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateArray(start, end) {
    const array = [];
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            array.push(i);
        }
    } else {
        for (let i = start; i >= end; i--) {
            array.push(i);
        }
    }
    return array;
}

rl.question('Enter the first number: ', (firstNumber) => {
    rl.question('Enter the second number: ', (secondNumber) => {
        const start = parseInt(firstNumber);
        const end = parseInt(secondNumber);
        const resultArray = generateArray(start, end);
        console.log('Generated Array:', resultArray);
        rl.close();
    });
});
