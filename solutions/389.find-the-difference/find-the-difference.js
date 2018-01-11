/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// const findTheDifference = (s, t) => {
//   s = [...s].sort()
//   t = [...t].sort()

//   let p = 0
//   while (p < t.length) {
//     if (s[p] !== t[p]) return t[p]

//     p++
//   }
// }


const findTheDifference = (s, t) => {
  let sum = 0

  for (let i in t) {
    sum += t.charCodeAt(i)
  }

  for (let i in s) {
    sum -= s.charCodeAt(i)
  }

  return String.fromCharCode(sum)
}
