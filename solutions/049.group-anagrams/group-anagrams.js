/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
  let hash = {}

  strs.forEach(e=>{
    let memo = [...e].sort().join('')

    if(!hash[memo]) {
      hash[memo] = [e]
    } else {
      hash[memo].push(e)
    }
  })

  return [...Object.values(hash)]
};