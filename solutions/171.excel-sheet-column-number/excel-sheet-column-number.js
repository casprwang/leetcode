/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = s => 
  s.split('').reverse().reduce((acc, e, i)=>{
    return acc+ letterToNumber(e) * 26 **i
  }, 0)

const letterToNumber = s => 
  s.charCodeAt(0) - 64