/*
 * [350] Intersection of Two Arrays II
 *
 * https://leetcode.com/problems/intersection-of-two-arrays-ii
 *
 * algorithms
 * Easy (44.60%)
 * Total Accepted:    71.1K
 * Total Submissions: 159.5K
 * Testcase Example:  '[]\n[]'
 *
 * 
 * Given two arrays, write a function to compute their intersection.
 * 
 * 
 * Example:
 * Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
 * 
 * 
 * Note:
 * 
 * Each element in the result should appear as many times as it shows in both
 * arrays.
 * The result can be in any order.
 * 
 * 
 * 
 * Follow up:
 * 
 * What if the given array is already sorted? How would you optimize your
 * algorithm?
 * What if nums1's size is small compared to nums2's size? Which algorithm is
 * better?
 * What if elements of nums2 are stored on disk, and the memory is limited such
 * that you cannot load all elements into the memory at once?
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// functional way
// const intersect = (nums1, nums2) => {
//   return nums1.reduce(
//     (acc, e) => {
//       if (acc.nums2.includes(e)) {
//         acc.output.push(e)
//         delete acc.nums2[acc.nums2.indexOf(e)]
//       }
//       return acc
//     },
//     { nums2: nums2, output: [] }
//   ).output
// }

// cleaner way
const intersect = (nums1, nums2) => {
  //create table 
  let table = nums1.reduce((acc, e)=> {
    acc[e] = acc[e]
    ? acc[e]+1
    : 1
    return acc
  }, {})

  // filter
  return nums2.filter(e=>{
    if (table[e]){
      table[e]-=1
      return true
    }
    return false
  })
}
