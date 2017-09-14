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