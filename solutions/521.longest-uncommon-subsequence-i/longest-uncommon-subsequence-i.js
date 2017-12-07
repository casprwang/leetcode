/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const findLUSlength = 
  (a,b)=> 
    a===b 
      ? -1
      : Math.max(a.length, b.length)