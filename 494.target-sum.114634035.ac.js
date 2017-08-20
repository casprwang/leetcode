/*
 * [494] Target Sum
 *
 * https://leetcode.com/problems/target-sum
 *
 * algorithms
 * Medium (43.53%)
 * Total Accepted:    26.5K
 * Total Submissions: 60.9K
 * Testcase Example:  '[1,1,1,1,1]\n3'
 *
 * 
 * You are given a list of non-negative integers, a1, a2, ..., an, and a
 * target, S. Now you have 2 symbols + and -. For each integer, you should
 * choose one from + and - as its new symbol.
 * ⁠
 * 
 * Find out how many ways to assign symbols to make sum of integers equal to
 * target S.  
 * 
 * 
 * Example 1:
 * 
 * Input: nums is [1, 1, 1, 1, 1], S is 3. 
 * Output: 5
 * Explanation: 
 * 
 * -1+1+1+1+1 = 3
 * +1-1+1+1+1 = 3
 * +1+1-1+1+1 = 3
 * +1+1+1-1+1 = 3
 * +1+1+1+1-1 = 3
 * 
 * There are 5 ways to assign symbols to make the sum of nums be target 3.
 * 
 * 
 * 
 * Note:
 * 
 * The length of the given array is positive and will not exceed 20. 
 * The sum of elements in the given array will not exceed 1000.
 * Your output answer is guaranteed to be fitted in a 32-bit integer.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
const findTargetSumWays = 
        (nums, S, sum = 0, i = 0, memo = new Map()) => {
		let key = sum + ',' + i
		if (memo.has(key)) return memo.get(key)
                if (i === nums.length) return sum === S
                memo.set(
                        key,
                        findTargetSumWays(nums, S, sum + nums[i], i + 1, memo) +
                                findTargetSumWays(nums, S, sum - nums[i], i + 1, memo)
                )
                return memo.get(key)
	}
