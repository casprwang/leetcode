/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = nums => {
  if(nums.length === 0) return []
    
  let cur = nums[0]
  let res = [[cur]]

  for (let i = 1; i < nums.length; i++) {
    if (cur + 1 === nums[i]) {
      res[res.length - 1][1] = cur + 1
    } else {
      res.push([nums[i]])
    }

    cur = nums[i]
  }

  // [[1,2], [3], [4,6]]
  return res.map(e => {
    if (e.length === 1) return String(e[0])
    else {
      return e.join("->")
    }
  })
}
