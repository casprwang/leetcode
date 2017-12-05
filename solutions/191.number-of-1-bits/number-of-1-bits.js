/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = n => {
  let binary = n.toString(2)
  return [...binary].reduce((acc,e)=>{
    return Number(e)+acc
  }, 0)
}