/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  // odd len / 2 +1
  // even (len/2 + len/2 +1 ) / 2
  let arr = [...nums1, ...nums2].sort((a, b) => a - b)
  let len = arr.length
  let half = ~~((len - 1) / 2)
  if (len & 1) {
    // odd
    return arr[half]
  } else {
    if (len === 0) return arr[0]
    return (arr[half] + arr[half + 1]) / 2
  }
}
