/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) =>{
  let set = new Set()
  return numbers.reduce((acc, e, i)=>{
    if(acc.set.has(e)) acc.ans= [ numbers.indexOf(target-e)+1, i+1 ]
    else acc.set.add(target - e)
    return acc
  }, {set, ans:[]}).ans
}