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