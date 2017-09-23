/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = word => {
  if(word.toUpperCase() === word) return true
  else if(word.toLowerCase() === word) return true
  else if (word.length>1 && word[0].toUpperCase() === word[0]
  && word.slice(1).toLowerCase() === word.slice(1)
) return true
  else return false
}