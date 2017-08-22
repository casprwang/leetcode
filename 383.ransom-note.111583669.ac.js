/*
 * [383] Ransom Note
 *
 * https://leetcode.com/problems/ransom-note
 *
 * algorithms
 * Easy (47.12%)
 * Total Accepted:    58K
 * Total Submissions: 123K
 * Testcase Example:  '"a"\n"b"'
 *
 * 
 * Given an arbitrary ransom note string and another string containing letters
 * from all the magazines, write a function that will return true if the
 * ransom 
 * note can be constructed from the magazines ; otherwise, it will return
 * false. 
 * 
 * 
 * Each letter in the magazine string can only be used once in your ransom
 * note.
 * 
 * 
 * Note:
 * You may assume that both strings contain only lowercase letters.
 * 
 * 
 * 
 * canConstruct("a", "b") -> false
 * canConstruct("aa", "ab") -> false
 * canConstruct("aa", "aab") -> true
 * 
 * 
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let rLetters = {}
  let mLetters = {}
  let flag = true

  for (let i = 0; i < ransomNote.length; i++) {
    rLetters[ransomNote[i]] = rLetters[ransomNote[i]]
      ? ++rLetters[ransomNote[i]]
      : 1
  }
  for (let i = 0; i < magazine.length; i++) {
    mLetters[magazine[i]] = mLetters[magazine[i]] ? ++mLetters[magazine[i]] : 1
  }

  for (let i in rLetters) {
    if (!mLetters[i] || rLetters[i] > mLetters[i]) {
      flag = false
      break
    }
  }
  return flag
};
