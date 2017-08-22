/*
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number
 *
 * algorithms
 * Easy (35.25%)
 * Total Accepted:    232.1K
 * Total Submissions: 658.3K
 * Testcase Example:  '-2147483648'
 *
 * Determine whether an integer is a palindrome. Do this without extra space.
 * 
 * click to show spoilers.
 * 
 * Some hints:
 * 
 * Could negative integers be palindromes? (ie, -1)
 * 
 * If you are thinking of converting the integer to string, note the
 * restriction of using extra space.
 * 
 * You could also try reversing an integer. However, if you have solved the
 * problem "Reverse Integer", you know that the reversed integer might
 * overflow. How would you handle such case?
 * 
 * There is a more generic way of solving this problem.
 * 
 * 
 */
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x =>{
  let arr = x.toString().split('')
  return arr.every((e,i)=> parseInt(e) === parseInt(arr[arr.length-i-1]))
};
