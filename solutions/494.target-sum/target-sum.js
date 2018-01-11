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