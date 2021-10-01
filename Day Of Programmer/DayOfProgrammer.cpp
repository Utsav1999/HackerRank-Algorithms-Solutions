/*
url:https://www.hackerrank.com/challenges/day-of-the-programmer/problem
author:Pratik Vartak
*/

#include<bits/stdc++.h>
using namespace std;


void day(int year)
{
    int date;
    if(year>=1700 && year<=1917)
    {
        if(year % 4==0)
        {
            date=12;
        }
        else
        {
            date=13;

        }
    }
    else if (year==1918)
    {
        date=26;
    }
    else if(year>1918)
    {
        if(year % 400==0)
        {
            date=12;
        }
        else if(year % 4 ==0 && year % 100 !=0)
        {
            date=12;
        }
        else
        {
            date =13;
        }
    }
    cout<<date<<"."<<"09."<<year;

}


int main()
{
    int year;
    cin>>year;
    day(year);

}
