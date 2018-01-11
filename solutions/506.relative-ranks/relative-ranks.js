/**
 * @param {number[]} nums
 * @return {string[]}
 */
const findRelativeRanks = nums => {
  let ref = [...nums].sort((a,b)=> b-a)
  return nums.map((e,i)=>{
    if(e ===ref[0]) e = 'Gold Medal'
    else if(e ===ref[1]) e = 'Silver Medal'
    else if(e ===ref[2]) e = 'Bronze Medal'
    else e = ref.indexOf(e)+1
    return e.toString()
  })
}


