/*
 * [40] Combination Sum II
 *
 * https://leetcode.com/problems/combination-sum-ii
 *
 * algorithms
 * Medium (33.73%)
 * Total Accepted:    120.9K
 * Total Submissions: 358.3K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * 
 * Given a collection of candidate numbers (C) and a target number (T), find
 * all unique combinations in C where the candidate numbers sums to T.
 * 
 * 
 * Each number in C may only be used once in the combination.
 * 
 * Note:
 * 
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * 
 * 
 * 
 * 
 * For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8, 
 * A solution set is: 
 * 
 * [
 * ⁠ [1, 7],
 * ⁠ [1, 2, 5],
 * ⁠ [2, 6],
 * ⁠ [1, 1, 6]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const combinationSum2 = (
  candidates, 
  target,
  result = [],
  temp = []
) => {
    candidates.sort();
    function backtracking(temp, target, start) {
        if (target < 0) return;
        else if (target === 0) {
            result.push([...temp]);
        } else {
            for (let i = start; i < candidates.length; i++) {
                if (i > start && candidates[i] === candidates[i-1]) continue;
                temp.push(candidates[i]);
                backtracking(temp, target - candidates[i], i+1);
                temp.pop();
            }
        }
    }
    backtracking(temp, target, 0)
    return result
};

