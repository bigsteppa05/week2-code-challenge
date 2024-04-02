const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }

    return true;
}

function findPrimeNumbers(input) {
    const numbers = input.split(' ').map(num => parseInt(num));
    const primeNumbers = numbers.filter(number => isPrime(number));
    return primeNumbers;
}

rl.question('Enter numbers separated by spaces: ', (input) => {
    const primeNumbers = findPrimeNumbers(input);
    console.log('Prime Numbers:', primeNumbers);
    rl.close();
});