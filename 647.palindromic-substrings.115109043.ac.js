/*
 * [647] Palindromic Substrings
 *
 * https://leetcode.com/problems/palindromic-substrings
 *
 * algorithms
 * Medium (56.20%)
 * Total Accepted:    8K
 * Total Submissions: 14.2K
 * Testcase Example:  '"abc"'
 *
 * 
 * Given a string, your task is to count how many palindromic substrings in
 * this string.
 * 
 * 
 * 
 * The substrings with different start indexes or end indexes are counted as
 * different substrings even they consist of same characters. 
 * 
 * 
 * Example 1:
 * 
 * Input: "abc"
 * Output: 3
 * Explanation: Three palindromic strings: "a", "b", "c".
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: "aaa"
 * Output: 6
 * Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 * 
 * 
 * 
 * Note:
 * 
 * The input string length won't exceed 1000.
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    var length = s.length;
    var count = length;
    for(var i = 1;i<length;i++) {
        var start = 0;
        var end = i;
        while (end != length) {
            if (isPalindromicString(s.substring(start, end + 1))) {
                count += 1;
            }
            start += 1;
            end += 1;
        }
    }
    return count;
};

function isPalindromicString(s){
    var start = 0;
    var end = s.length-1;
    while(start<end){
        if(s.charAt(start)!=s.charAt(end)){
            return false;
        }
        start+=1;
        end-=1;
    }
    return true;

};
