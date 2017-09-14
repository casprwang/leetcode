/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const subsetsWithDup = (nums, res = new Set()) => {
  nums.sort()
  const iter = (temp, pos) => {

    for (let i = pos; i < nums.length; i++) {
      res.add(JSON.stringify([...temp, nums[i]]))
      iter([...temp,nums[i]], i + 1)
    }
  }

  iter([], 0)
  return [...res, '[]'].map(JSON.parse)
}