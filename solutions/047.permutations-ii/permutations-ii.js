/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const permuteUnique = (
  nums,
  res = [],
  visited = new Array(nums.length).fill(false)
) => {
  nums.sort()

  const iter = temp =>{
    if(temp.length === nums.length) res.push([...temp])

    for (let i in visited) {
      if( visited[i] || nums[i] === nums[i-1] && !visited[i-1]) continue
      temp.push(nums[i])
      visited[i] = true 
      iter(temp)
      visited[i]=false
      temp.pop()
    }
  }

  iter([])
  return res
}