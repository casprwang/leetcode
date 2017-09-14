/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (
  nums,
  result=new Set()
)=> {
  const iter = (temp, pos) => {
    for (let i =pos; i<nums.length ; i++) {
      result.add(JSON.stringify([...temp, nums[i]]))
      iter([...temp, nums[i]], i+1)
    }
  } 
  iter([], 0)
  return [...result, '[]'].map(JSON.parse)
}