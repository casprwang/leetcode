/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = words => words.filter(e=>isInOneRow(e))

const isInOneRow = word => {
  // string => bool
  
  let temp = [...word].map(e=>e.toLowerCase())
  if (temp.every(e=> 'asdfghjkl'.includes(e))
    ||temp.every(e=>'zxcvbnm'.includes(e))
    ||temp.every(e=>'qwertyuiop'.includes(e)))
    {
    return true
  } 
  return false
}