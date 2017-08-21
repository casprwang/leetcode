/*
 * [47] Permutations II
 *
 * https://leetcode.com/problems/permutations-ii
 *
 * algorithms
 * Medium (32.79%)
 * Total Accepted:    126.4K
 * Total Submissions: 385.5K
 * Testcase Example:  '[1,1,2]'
 *
 * 
 * Given a collection of numbers that might contain duplicates, return all
 * possible unique permutations.
 * 
 * 
 * 
 * For example,
 * [1,1,2] have the following unique permutations:
 * 
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 * 
 * 
 */
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
};
