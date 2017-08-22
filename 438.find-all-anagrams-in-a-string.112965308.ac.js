/*
 * [438] Find All Anagrams in a String
 *
 * https://leetcode.com/problems/find-all-anagrams-in-a-string
 *
 * algorithms
 * Easy (33.67%)
 * Total Accepted:    36.6K
 * Total Submissions: 108.8K
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * Given a string s and a non-empty string p, find all the start indices of p's
 * anagrams in s.
 * 
 * Strings consists of lowercase English letters only and the length of both
 * strings s and p will not be larger than 20,100.
 * 
 * The order of output does not matter.
 * 
 * Example 1:
 * 
 * Input:
 * s: "cbaebabacd" p: "abc"
 * 
 * Output:
 * [0, 6]
 * 
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of
 * "abc".
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * s: "abab" p: "ab"
 * 
 * Output:
 * [0, 1, 2]
 * 
 * Explanation:
 * The substring with start index = 0 is "ab", which is an anagram of "ab".
 * The substring with start index = 1 is "ba", which is an anagram of "ab".
 * The substring with start index = 2 is "ab", which is an anagram of "ab".
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  var frequency = {}, visit = {}, result = [];
  for (var i = 0; i < p.length; ++i) {
    frequency[p[i]] = frequency[p[i]] ? ++frequency[p[i]] : 1;
  }
  for (var i = 0; i < p.length; ++i) {
    visit[s[i]] = visit[s[i]] ? ++visit[s[i]] : 1;
  }

  var checkMatch = function (obj1, obj2) {
    for (var key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  };

  for (var i = 0; i < s.length - p.length + 1; ++i) {
    if (checkMatch(frequency, visit)) result.push(i);
    --visit[s[i]];
    visit[s[i + p.length]] = visit[s[i + p.length]] ? ++visit[s[i + p.length]] : 1;
  }

  return result;
};
