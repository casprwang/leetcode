/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = (nums, r, c) => {
  // [[]...] => [[]...]
  if(r*c !== nums[0].length*nums.length) return nums
  let res = []
  nums.forEach(e=>{
    res.push(...e)
  })
  let output = []
  for(let i =0; i<r;i++){
    let temp  = [...res.slice(i*c, (i+1)*c)]
    output.push(temp)
  }
  return output
}