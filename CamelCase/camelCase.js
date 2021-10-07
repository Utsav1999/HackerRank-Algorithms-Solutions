// url: https://www.hackerrank.com/challenges/camelcase/problem
// author: Eirik Sjøløkken

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'camelCase' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function camelCase(sentence) {
    // write your code here
    let words = 1;

    // loops through every character in the string sentence
    for (let i in sentence){
        // checks if a character is uppercase
        if(sentence.charAt(i) === sentence.charAt(i).toUpperCase()){
            // increment words
            words++;
        }
    }


    // returns the total amount of words
    return words;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = camelCase(s);

    ws.write(result + '\n');

    ws.end();
}
