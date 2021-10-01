/*
url:https://www.hackerrank.com/challenges/day-of-the-programmer/problem
author:Pratik Vartak
*/

#include<bits/stdc++.h>
using namespace std;


void day(int year)
{
    /*
    INTUITION:
    Overall basic intuition is if year is leap in any calendar julian or gregorian
    day of programmer will fall on 12 sept and if not it will be on 13 sept
    
    */

    int date;
    //check if the year lies before 1918 and greater than equal to1700
    //this means its in julian calendar



    if(year>=1700 && year<=1917)
    {
        // if year lies then check wheteher it us leap
        //in julian calendar leap year is divisible by 4

        if(year % 4==0)
        {
            date=12;
        }
        else
        {
            date=13;

        }
    }
    /*
    February  contained 28  (the usual number of days in a non-leap year) 
    minus 13 (the number of missed days as the  was the first day of the month) equal to  days.
    so in 1918 there were total 215 excluding 13 days in feb,  so 256-215=41 and then 15 days were missed
    as 14 was first day of february so 41-15 = 26
    hence date is 26 in 1918
    */
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
