/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
  let hash = {}
  for (let v of [...t]) {
    hash[v] ? hash[v]++ : (hash[v] = 1)
  }
  for (let v of [...s]) {
    hash[v]--
  }
  for (let key in hash) {
    if(hash[key] === 1) return key
  }
}