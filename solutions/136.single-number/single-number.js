/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums =>{
  let set = new Set()
  return [
    ...nums.reduce((acc, e)=>{
      if(acc.has(e)) acc.delete(e)
      else acc.add(e)
      return acc
    }, set)
  ][0]
}