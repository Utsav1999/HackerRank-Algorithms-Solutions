/*
  url - https://www.hackerrank.com/challenges/solve-me-first/problem
  author - @Utsav-BIT (Utsav Akash Naskar)
*/

#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>


int solveMeFirst(int a, int b) {
    int z;
    z=a+b; // adding two numbers
    return z; // returning the result 
}
int main() {
    int num1,num2;
    scanf("%d %d",&num1,&num2); // taking two numbers from user
    int sum; 
    sum = solveMeFirst(num1,num2); // function calling
    printf("%d",sum); // result display
}
