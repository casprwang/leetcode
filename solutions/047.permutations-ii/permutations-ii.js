/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = nums => {
  nums.sort()
  let res = []

  const backtrack = (temp, visited) => {

    if (visited.every(e => e === 1)) {
      res.push(temp)
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i] === 1) continue


      let item = nums[i]
      if (nums[i] === nums[i - 1] && visited[i - 1]) continue

      visited[i] = 1
      backtrack([...temp, item], visited)
      visited[i] = undefined
    }

  }

  backtrack([], Array(nums.length).fill(0))

  return res
}
