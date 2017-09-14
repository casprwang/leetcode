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