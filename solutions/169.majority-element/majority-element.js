/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
  let hash = {}

  let len = nums.length
  for (let i = 0; i < len; i++) {
    let item = nums[i]
    if (item in hash) {
      hash[item]++
    } else {
      hash[item] = 1
    }

    if (hash[item] > len / 2) return item
  }
}