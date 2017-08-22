/*
 * [349] Intersection of Two Arrays
 *
 * https://leetcode.com/problems/intersection-of-two-arrays
 *
 * algorithms
 * Easy (47.24%)
 * Total Accepted:    95.9K
 * Total Submissions: 203K
 * Testcase Example:  '[]\n[]'
 *
 * 
 * Given two arrays, write a function to compute their intersection.
 * 
 * 
 * Example:
 * Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
 * 
 * 
 * Note:
 * 
 * Each element in the result must be unique.
 * The result can be in any order.
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) =>{
  let set = new Set(nums1)
  let output= new Set()
  nums2.forEach(e=> {
    if (set.has(e)) output.add(e)
  })
  return [...output]
}
