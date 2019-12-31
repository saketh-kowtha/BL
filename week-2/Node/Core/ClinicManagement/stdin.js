const readline = require('readline');

//Creating Sync STDIN
const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function stdin(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, (input) => resolve(input) );       
    });
}

module.exports = stdin

