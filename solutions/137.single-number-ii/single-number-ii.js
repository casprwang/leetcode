/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => 
  parseInt(
    Object.entries(
      nums.reduce((acc,e)=>{
        if(acc[e]) acc[e]+=1
        else acc[e] =1
        return acc
      },{})
    ).filter(e=>{
      if(e[1]===1) return true
      return false
    })[0][0]
  )