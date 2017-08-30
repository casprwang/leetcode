/*
 * [152] Maximum Product Subarray
 *
 * https://leetcode.com/problems/maximum-product-subarray
 *
 * algorithms
 * Medium (25.54%)
 * Total Accepted:    103.8K
 * Total Submissions: 406.6K
 * Testcase Example:  '[-2]'
 *
 * 
 * Find the contiguous subarray within an array (containing at least one
 * number) which has the largest product.
 * 
 * 
 * 
 * For example, given the array [2,3,-2,4],
 * the contiguous subarray [2,3] has the largest product = 6.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function(nums) {
  var ans = -Infinity
    , res = 1
    , tmp = 1;

  nums.forEach(function(item) {
    var _res = res * item
      , _tmp = tmp * item;

    ans = Math.max(ans, _res, _tmp);

    res = Math.max(_res, _tmp, 1);
    tmp = Math.min(_res, _tmp, 1);
  });

  return ans;
};
