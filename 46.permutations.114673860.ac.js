/*
 * [46] Permutations
 *
 * https://leetcode.com/problems/permutations
 *
 * algorithms
 * Medium (43.75%)
 * Total Accepted:    177K
 * Total Submissions: 404.5K
 * Testcase Example:  '[1,2,3]'
 *
 * 
 * Given a collection of distinct numbers, return all possible permutations.
 * 
 * 
 * 
 * For example,
 * [1,2,3] have the following permutations:
 * 
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums, res = []) => {
        const iter = temp => {
                if (temp.length === nums.length) res.push([...temp])
                else {
                        for (let i = 0; i < nums.length; i++) {
                                if(temp.includes(nums[i])) continue
                                temp.push(nums[i])
                                iter(temp)
                                temp.pop()
                        }
                }
        }

        iter([])
        return res
};
