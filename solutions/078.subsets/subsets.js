/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// const subsets = nums => {
//   let set = new Set()

//   const bfs = (temp, left) => {
//     if (set.has(JSON.stringify(temp.sort()))) return
//     set.add(JSON.stringify(temp.sort()))

//     for (let i = 0; i < left.length; i++) {
//       bfs([...temp, left[i]], [...left.slice(0, i), ...left.slice(i + 1)])
//     }
//   }

//   bfs([], nums)

//   return [...set].map(JSON.parse)
// }


// // use position other than left
// const subsets = nums => {
//   let set = new Set()

//   const bfs = (temp, pos) => {
//     if (set.has(JSON.stringify(temp.sort()))) return
//     set.add(JSON.stringify(temp.sort()))

//     if (pos === nums.length) return

//     for (let i = pos; i < nums.length; i++) {
//       bfs([...temp, nums[i]], i + 1)
//     }
//   }

//   bfs([], 0)

//   return [...set].map(JSON.parse)
// }


// const subsets = nums => {
//   let len = nums.length
//   let set = new Set()

//   const bfs = (temp, pos) => {
//     if (set.has(JSON.stringify(temp))) return
//     if (temp.length > len) return

//     set.add(JSON.stringify(temp))

//     for (let i = pos; i < len; i++) {
//       let item = nums[i]
//       bfs([...temp, item], i + 1)
//     }
//   }

//   bfs([], 0)

//   return [...set].map(JSON.parse)
// }


const subsets = nums => {
  let res = []

  const backtrack = (temp, pos) => {
    res.push(temp)

    if (pos === nums.length) return


    for (let i = pos; i < nums.length; i++) {
      let item = nums[i]

      backtrack([...temp, item], i + 1)
    }
  }

  backtrack([], 0)

  return res
}
