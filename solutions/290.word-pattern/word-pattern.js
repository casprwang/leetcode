/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPattern = (pattern, str) => {
  let arr = str.split(" ")
  if (pattern.length !== arr.length) return false

  let hashA = new Map()
  let hashB = new Map()

  for (let i = 0; i < pattern.length; i++) {

    if (hashA.get(arr[i]) !== undefined && hashA.get(arr[i]) !== pattern[i]) return false
    if (hashB.get(pattern[i]) !== arr[i] && hashB.get(pattern[i])!== undefined) return false

    hashA.set(arr[i], pattern[i])
    hashB.set(pattern[i], arr[i])
  }

  return true
}
