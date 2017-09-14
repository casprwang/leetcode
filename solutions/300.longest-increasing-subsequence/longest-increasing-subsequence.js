/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = nums=> {
  if (!nums.length) return 0
  const record = [1, ...new Array(nums.length-1)]
  for (var i = 1; i < nums.length; i++) {
    record[i] = 1
    for (var j = 0; j < i; j++) {
      if (nums[i] > nums[j])
        record[i] = Math.max(record[i], record[j] + 1)
    }
  }
  return Math.max(...record)
}