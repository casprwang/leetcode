/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
  let map = {}

  for (let i = 0; i < strs.length; i++) {
    let item = strs[i]
    let ref = sortStr(item)

    if (ref in map) {
      map[ref].push(item)
    } else {
      map[ref] = [item]
    }
  }

  return Object.values(map)// arr
};

const sortStr = s => [...s].sort().join('');