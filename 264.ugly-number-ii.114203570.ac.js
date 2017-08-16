/*
 * [264] Ugly Number II
 *
 * https://leetcode.com/problems/ugly-number-ii
 *
 * algorithms
 * Medium (32.55%)
 * Total Accepted:    60.7K
 * Total Submissions: 186.6K
 * Testcase Example:  '1'
 *
 * 
 * Write a program to find the n-th ugly number.
 * 
 * 
 * 
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
 * For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10
 * ugly numbers.
 * 
 * 
 * 
 * Note that 1 is typically treated as an ugly number, and n does not exceed
 * 1690.
 * 
 * 
 * Credits:Special thanks to @jianchao.li.fighter for adding this problem and
 * creating all test cases.
 */
/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = n => {
    let ugly = [1,...Array(n-1).fill(0)]
    let f2=0,f3=0,f5=0
    for(var i=1; i<n; i++){
        var min = Math.min.apply(Math, [2*ugly[f2],3*ugly[f3],5*ugly[f5]]);
        ugly[i] = min;
        if (2*ugly[f2] === min) f2++
        if (3*ugly[f3] === min) f3++
        if (5*ugly[f5] === min) f5++
    }
    return ugly[n-1]
}
