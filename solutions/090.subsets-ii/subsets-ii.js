/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = nums => {
  let set = new Set()

  const bfs = (temp, pos) => {
    let item = JSON.stringify(temp.sort())
    if (set.has(item)) return
    set.add(item)

    for (let i = pos; i < nums.length; i++) {
      bfs([...temp, nums[i]], i + 1)
    }
  }

  bfs([], 0)

  return [...set].map(JSON.parse)
};