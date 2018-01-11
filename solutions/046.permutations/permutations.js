/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = nums => {
  let res = []

  const backtrack = (temp, visited) => {

    if (visited.every(e => e === 1)) {
      res.push(temp)
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i] === 1) continue
      let item = nums[i]

      visited[i] = 1
      backtrack([...temp, item], visited)
      visited[i] = undefined
    }

  }

  backtrack([], Array(nums.length).fill(0))

  return res
}