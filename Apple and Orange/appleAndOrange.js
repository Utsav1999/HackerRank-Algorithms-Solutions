// url: https://www.hackerrank.com/challenges/apple-and-orange/problem
// author: Preetam Sarkar


'use strict';

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
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let totalApples = 0;
    let totalOranges = 0;
    // looping through apple to count the number of apple
    for (let i = 0; i <= apples.length; i++) {
        // if the orange lands between the house range s to t
        if (a + apples[i] >= s && a + apples[i] <= t) {
            // count apples
            totalApples += 1;
        }
    }
    // looping through oranges to count the number of orange
    for (let i = 0; i <= oranges.length; i++) {
        // if the orange lands between the house range s to t
        if (b + oranges[i] >= s && b + oranges[i] <= t) {
            // count oranges
            totalOranges += 1;
        }
    }
    // print the total count of apples
    console.log(totalApples);
    // print the total count of oranges
    console.log(totalOranges);
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const s = parseInt(firstMultipleInput[0], 10);

    const t = parseInt(firstMultipleInput[1], 10);

    const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const a = parseInt(secondMultipleInput[0], 10);

    const b = parseInt(secondMultipleInput[1], 10);

    const thirdMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(thirdMultipleInput[0], 10);

    const n = parseInt(thirdMultipleInput[1], 10);

    const apples = readLine().replace(/\s+$/g, '').split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().replace(/\s+$/g, '').split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
