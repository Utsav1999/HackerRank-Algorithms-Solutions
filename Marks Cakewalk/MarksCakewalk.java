// url: https://www.hackerrank.com/challenges/marcs-cakewalk/problem
// author: Adithya Bhat
// github.com/AdiBhat108

import java.util.Scanner;
import java.util.Arrays;
import java.util.Collections;

// Algorithm: Eat the largest cupcakes first

// This is NOT a greedy Algorithm!
// 
// According to Wikipedia, A greedy algorithm makes the "locally optimal choice at each stage with
// the hope of finding a global optimum". Since our solution actually makes the locally LEAST
// optimal choice at each stage, it is NOT a greedy algorithm. 
// I'm not sure if there's a specific name for this,
// we can just call it a "reverse-greedy algorithm"

// Time Complexity: O(n log n)
public class Solution {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        Integer [] calories = new Integer[n]; // Use Integer instead of int to make sorting in simpler
        for (int i = 0; i < n; i++){
            calories[i] = scan.nextInt();
        }
        scan.close();
        System.out.println(minimumMiles(calories));
    }
    
    private static long minimumMiles(Integer [] calories) {
        Arrays.sort(calories, Collections.reverseOrder());
        long multiplier = 1;
        long miles = 0;
        for (int j = 0; j < calories.length; j++) {
            miles += calories[j] * multiplier;
            multiplier *= 2;
        }
        return miles;
    }
}
