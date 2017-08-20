/*
 * [39] Combination Sum
 *
 * https://leetcode.com/problems/combination-sum
 *
 * algorithms
 * Medium (38.65%)
 * Total Accepted:    168.3K
 * Total Submissions: 435.5K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * 
 * Given a set of candidate numbers (C) (without duplicates) and a target
 * number (T), find all unique combinations in C where the candidate numbers
 * sums to T. 
 * 
 * 
 * The same repeated number may be chosen from C unlimited number of times.
 * 
 * 
 * Note:
 * 
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * 
 * 
 * 
 * 
 * For example, given candidate set [2, 3, 6, 7] and target 7, 
 * A solution set is: 
 * 
 * [
 * ⁠ [7],
 * ⁠ [2, 2, 3]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = 
  (candidates, target)=> {
    candidates.sort((a,b)=>a-b)
    const result = []

    const iter = 
      (i, res, sumArray)=>{
        while(i< candidates.length && candidates[i]<= res) {
          if (candidates[i] === res) result.push([...sumArray, candidates[i]])
          iter(i, res-candidates[i], [...sumArray, candidates[i]])
          i++
        }
      }
    
    iter(0, target, [])
    return result
  };
