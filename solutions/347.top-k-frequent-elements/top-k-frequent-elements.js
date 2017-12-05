/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  let hash = {}

  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = ~~hash[nums[i]] + 1
  }

  let entries = Object.entries(hash)

  // [[1,2], [2,3], [2,3]]

  entries.sort((a, b) => b[1] - a[1])


  let res = []
  for (let i = 0; i < k; i++) {
    res.push(Number(entries[i][0]))
  }

  return res
}
