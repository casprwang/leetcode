/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs=> {
  if (!strs.length) return ''
  let len = strs.reduce((acc,e)=>{
    if (e.length< acc) acc=e.length
    return acc
  },Number.MAX_VALUE)

  let output= ''

  for (let i = 0; i<len; i+=1) {
    if (!strs.every(e=>e[i]===strs[0][i]) ) break
    output+=strs[0][i]
  }

  return output
}
