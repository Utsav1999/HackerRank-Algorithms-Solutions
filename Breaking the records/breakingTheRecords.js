// url: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
// author: Preetam Sarkar

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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    const scoreLength = scores.length;
    let mostScore = scores[0];
    let worstScore = scores[0];
    let mostScores = 0;
    let worstScores = 0;
    // looping through scores array
    for(let i = 0; i < scoreLength; i++){
        // storing the current array element in a variable
        const curScore = scores[i];
        // check for the best scores
        if(mostScore < curScore){
            mostScore = curScore;
            mostScores++;
        }
        // check for the worst scores
        if(worstScore > curScore){
            worstScore = curScore;
            worstScores++;
        }
    }
    // return array of best and worst scores
    return [mostScores, worstScores];

}

/*
 * The 'main' function below.
 *
 * The function accepts following input mentioned as per the test cases input:
 *  1. INTEGER_ARRAY scores (this array contains the value of the score for every game played 
 *  No. of game played is the array index)
 */

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
