/*
  url: https://www.hackerrank.com/challenges/simple-array-sum/problem
  author: @Utsav-BIT (Utsav Akash Naskar)
*/

#include<stdio.h>
int main()
{
    int n, i;
    scanf("%d", &n); // number of elements in the array
    int arr[n];
    int sum = 0;
    for(i = 0; i < n; i++)
    {
        scanf("%d ", &arr[i]); // taking input for the array elements
        sum = sum + arr[i]; // adding the array elements
    }
    printf("%d\n", sum); // sum display
    return 0;
}
