const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function swapCase(inputString) {
    let swappedString = '';
    for (let i = 0; i < inputString.length; i++) {
        let charCode = inputString.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // Uppercase range
            swappedString += String.fromCharCode(charCode + 32); // Convert to lowercase
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase range
            swappedString += String.fromCharCode(charCode - 32); // Convert to uppercase
        } else {
            swappedString += inputString.charAt(i); // Keep unchanged if not a letter
        }
    }
    return swappedString;
}

rl.question('Please type a string: ', (inputString) => {
    const swappedString = swapCase(inputString);
    console.log('Swapped Case:', swappedString);
    rl.close();
});