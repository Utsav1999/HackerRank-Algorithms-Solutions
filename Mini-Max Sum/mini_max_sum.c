/*
  url: https://www.hackerrank.com/challenges/mini-max-sum/problem
  author: @Utsav-BIT (Utsav Akash Naskar)
*/

#include <assert.h>
#include <limits.h>
#include <math.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int main()
{
    long long int arr[5], max = 0, min = 0, sum = 0;
    for(int i = 0; i < 5; i++){
        scanf("%lld", &arr[i]); // input array element
        if(arr[i] > max){
            max = arr[i]; // finding the max element
        }
        sum += arr[i]; // sum of all the elements
    }
    min =arr[0]; // let the first element is the least value present
    for(int i = 0; i < 5; i++)
        {
        if(arr[i]<min)
            min=arr[i]; // finding the min element
    }
    /**
    * sum - max will be the minsum
    * sum - min will be the maxsum
    */
    printf("%lld %lld", sum-max, sum-min);
    
    return 0;
}
