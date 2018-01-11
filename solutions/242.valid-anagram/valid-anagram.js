/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if(s.length !== t.length) return false

  let hashS = {}
  let hashT = {}

  for (let i = 0; i < s.length; i++) {
    let item = s[i]
    hashS[item] = ~~hashS[item] + 1
  }

  for(let i= 0; i<t.length; i++){
    let item = t[i]
    hashT[item] = ~~hashT[item]+ 1
  }

  for(let i =0 ; i<s.length; i++) {
    let item = s[i]
    if (hashS[item] !== hashT[item]) return false
  }
  
  return true
}