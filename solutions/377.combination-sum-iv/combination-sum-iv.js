/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// const combinationSum4 = (nums, target) => {
//   if(nums.length === 0) return 0
//   let map = new Map()

//   const dfs = (left) => {
//     if(left === 0) return 1
//     if(left<0) return 0
//     if(map.has(left)) return map.get(left)

//     let count = 0
//     for(let i = 0; i<nums.length; i++) {
//       count+= dfs(left - nums[i], map)
//     }
//     map.set(left, count)
//     return count
//   }

//   return dfs(target, map)
// }

// const combinationSum4 = (nums, target) => {
//   if (target === 0) return 1

//   let res = 0
//   for (let i = 0; i < nums.length; i++) {
//     if (target >= nums[i]) {
//       res += combinationSum4(nums, target - nums[i])
//     }
//   }
//   return res
// }

const combinationSum4 = function(nums, target) {
  let dp = [1]
  // i -> target
  // dp[i] -> number of combinations

  for (let i = 1; i <= target; i++) {
    dp[i] = 0
    for (let j = 0; j < nums.length; j++) {
      let item = nums[j]
      if (i - item < 0) continue

      dp[i] += dp[i - item]
    }
  }

  return dp[target]
}
