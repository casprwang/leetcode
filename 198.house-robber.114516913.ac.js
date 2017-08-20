/*
 * [198] House Robber
 *
 * https://leetcode.com/problems/house-robber
 *
 * algorithms
 * Easy (38.88%)
 * Total Accepted:    146K
 * Total Submissions: 375.4K
 * Testcase Example:  '[]'
 *
 * You are a professional robber planning to rob houses along a street. Each
 * house has a certain amount of money stashed, the only constraint stopping
 * you from robbing each of them is that adjacent houses have security system
 * connected and it will automatically contact the police if two adjacent
 * houses were broken into on the same night.
 * 
 * Given a list of non-negative integers representing the amount of money of
 * each house, determine the maximum amount of money you can rob tonight
 * without alerting the police.
 * 
 * Credits:Special thanks to @ifanchu for adding this problem and creating all
 * test cases. Also thanks to @ts for adding additional test cases.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums.length) return 0;
  var robbed, dp = [nums[0]], len = nums.length;

  if (len > 1) {
    dp[1] = nums[1] > nums[0] ? nums[1] : dp[0];
    robbed = nums[1] > nums[0];
  }
  for (var i = 2; i < len; ++i) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[len - 1];
};
