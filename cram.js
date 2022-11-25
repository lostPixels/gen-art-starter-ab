const replace = require('replace-in-file');
const config = require('./replace.config.json');
console.log(config);
// return;

// let from = [
//     /grainHigh/g

// ]

let from = config.map(word => new RegExp(`${word}`, 'g'));
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let to = [];
let letterCount = 0;
let letterStep = 0;
for (let i = 0; i < from.length; i++) {
    let lt = letters[letterStep] + letterCount;
    to.push(lt);
    letterCount++;
    if (letterCount > 9) {
        letterCount = 0;
        letterStep++;
    }
}

console.log(to)

const options = {
    files: './dist/main.js',
    from,
    to,
    countMatches: true
};

try {
    const results = replace.sync(options);
    console.log('Replacement results:', results);
}
catch (error) {
    console.error('Error occurred:', error);
}