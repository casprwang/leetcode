/**
 * @param {string} s
 * @return {boolean}
 */
const canPermutePalindrome = s => {
  // abc 
  // aba
  // aa bb 
  let len = s.length
  let hash = {}

  for (let i = 0; i < len; i++) {
    let item = s[i]
    hash[item] = ~~hash[item] + 1
  }

  return Object
    .values(hash)
    .filter(e=>{
      if(e & 1) {return e}
    })
    .length > 1 ? false : true
    // if odd length
}
