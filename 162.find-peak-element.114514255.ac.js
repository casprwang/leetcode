/*
 * [162] Find Peak Element
 *
 * https://leetcode.com/problems/find-peak-element
 *
 * algorithms
 * Medium (37.45%)
 * Total Accepted:    119.2K
 * Total Submissions: 318.3K
 * Testcase Example:  '[1,2,3,1]'
 *
 * A peak element is an element that is greater than its neighbors.
 * 
 * Given an input array where num[i] ≠ num[i+1], find a peak element and return
 * its index.
 * 
 * The array may contain multiple peaks, in that case return the index to any
 * one of the peaks is fine.
 * 
 * You may imagine that num[-1] = num[n] = -∞.
 * 
 * For example, in array [1, 2, 3, 1], 3 is a peak element and your function
 * should return the index number 2.
 * 
 * click to show spoilers.
 * 
 * Note:
 * Your solution should be in logarithmic complexity.
 * 
 * 
 * Credits:Special thanks to @ts for adding this problem and creating all test
 * cases.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement =
  nums => {
    if (nums.length ===1) return 0
    let arr = [Number.MIN_SAFE_INTEGER, ...nums, Number.MIN_SAFE_INTEGER]
    return output = arr.reduce((acc, e, i)=>{
      if(e>arr[i-1]&& e>arr[i+1]) acc=i
      return acc
    }, -1)-1
  }
