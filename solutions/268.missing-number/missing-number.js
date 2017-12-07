/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const supposesum = (0 + nums.length) * ( nums.length + 1) / 2
  const realsum = nums.reduce((pre, cur)=> pre + cur)
  return supposesum - realsum
}