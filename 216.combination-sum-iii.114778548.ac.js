/*
 * [216] Combination Sum III
 *
 * https://leetcode.com/problems/combination-sum-iii
 *
 * algorithms
 * Medium (45.07%)
 * Total Accepted:    71.4K
 * Total Submissions: 158.5K
 * Testcase Example:  '3\n7'
 *
 * 
 * Find all possible combinations of k numbers that add up to a number n, given
 * that only numbers from 1 to 9 can be used and each combination should be a
 * unique set of numbers.
 * 
 * 
 * 
 * ⁠Example 1:
 * Input:  k = 3,  n = 7
 * Output: 
 * 
 * [[1,2,4]]
 * 
 * 
 * ⁠Example 2:
 * Input:  k = 3,  n = 9
 * Output: 
 * 
 * [[1,2,6], [1,3,5], [2,3,4]]
 * 
 * 
 * 
 * Credits:Special thanks to @mithmatt for adding this problem and creating all
 * test cases.
 */
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = (
  k,n,
  temp=[],
  collection = []
) => {
  if (k===0 && n ===0) collection.push([...temp])
  if (n<0) return
  for(let i = 1; i<=9; i++){
    if(temp.length > 0 && i <= temp[temp.length -1]) continue
    combinationSum3(k-1, n-i, [...temp, i], collection)
  }
  return collection
}
