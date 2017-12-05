/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// const isIsomorphic = (s, t) => {
//   if (s.length !== t.length) return false

//   let p = 1

//   let charS = s.charCodeAt(0)
//   let charT = t.charCodeAt(0)

//   while (p < s.length) {
//     if (s.charCodeAt(p) !== charS && t.charCodeAt(p) === charT) return false
//     if (s.charCodeAt(p) === charS && t.charCodeAt(p) !== charT) return false

//     charS = s.charCodeAt(p)
//     charT = t.charCodeAt(p)

//     p++
//   }

//   return true
// }

const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false

  let hashT = {}
  let hashS = {}

  for(let i= 0 ;i < s.length;i++){
    let itemS = s[i]
    let itemT = t[i]

    if(!hashT[itemS] && !hashS[itemT]) {
      hashT[itemS] = itemT
      hashS[itemT] = itemS
      continue
    }

    if(hashT[itemS] && !hashS[itemT]) return false

    if(!hashT[itemS] && hashS[itemT]) return false

    if(hashT[itemS]!== itemT || hashS[itemT] !== itemS) return false

  }

  return true
}


