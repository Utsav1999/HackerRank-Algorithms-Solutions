/*
  url: https://www.hackerrank.com/challenges/grading/problem
  author: @Utsav-BIT (Utsav Akash Naskar)
*/

#include<stdio.h>
int main()
{
    int N, i, m, dif = 0, a;
    scanf("%d", &N); // number of elements
    for(i = 1; i <= N; i++)
    {
        scanf("%d\n", &m); // user input grade
        dif = 5 - (m % 5); // finding difference from next multiple of 5
        // if difference is less than 3 and the grade is greater than equal to 38
        // round the grade up to the next multiple of 5
        if(m >= 38 && dif < 3)
        {
            a = m + dif;
            printf("%d\n", a);
        }
        else 
            printf("%d\n", m);
    }
    return 0;
}
