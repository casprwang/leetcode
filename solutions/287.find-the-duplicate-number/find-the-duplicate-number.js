/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  for (let num of nums) {
    if (nums.indexOf(num) !== nums.lastIndexOf(num)) {
      return num 
    }
  }
}