/*
 * [26] Remove Duplicates from Sorted Array
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array
 *
 * algorithms
 * Easy (35.48%)
 * Total Accepted:    248.2K
 * Total Submissions: 699.4K
 * Testcase Example:  '[]'
 *
 * 
 * Given a sorted array, remove the duplicates in place such that each element
 * appear only once and return the new length.
 * 
 * 
 * Do not allocate extra space for another array, you must do this in place
 * with constant memory.
 * 
 * 
 * 
 * For example,
 * Given input array nums = [1,1,2],
 * 
 * 
 * Your function should return length = 2, with the first two elements of nums
 * being 1 and 2 respectively. It doesn't matter what you leave beyond the new
 * length.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let set = new Set()
  for(let i =0; i<nums.length; i++){
    if(set.has(nums[i])) {
      nums.splice(i, 1)
      i--
    }
    else set.add(nums[i]) 
  }
  return nums.length
};
