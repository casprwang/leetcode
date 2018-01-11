/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = word => {
  let isUpper = []

  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) <= 90) isUpper.push(true)
    else isUpper.push(false)
  }

  if (!isUpper.includes(false)) return true
  if (!isUpper.includes(true)) return true
  if (
    isUpper.includes(true) &&
    isUpper.indexOf(true) === 0 &&
    isUpper.lastIndexOf(true) === 0
  )
    return true

  return false
}

