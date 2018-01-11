/**
 * @param {number[]} nums
 * @return {number}
 */
// const findLengthOfLCIS = nums => {
//   // two pointer

//   let len = nums.length
//   if (len === 0) return 0

//   let p1 = 0
//   let p2 = 0

//   let stack = []
//   let max = 1

//   while (p2 < len) {
//     let item = nums[p2]

//     if (stack.length === 0) {
//       stack.push(item)
//       p2++
//       continue
//     }

//     let last = stack[stack.length - 1]

//     if (last < item) {
//       stack.push(item)
//       p2++
//     } else {
//       // last > item
//       while (last >= item && stack.length > 0) {
//         stack.shift()
//         p1++
//       }

//       stack.push(item)
//       p2++
//     }

//     let length = stack.length

//     max = Math.max(max, length)
//   }

//   return max
// }


const findLengthOfLCIS = nums => {
  let len = nums.length

  if(len === 0) return 0
  if(len === 1) return 1

  let last = nums[0] 
  let count = 1
  let max = 1

  
  for(let i =1 ;i<len; i++){
    let item = nums[i]
    last = nums[i-1]

    if(item > last) {
      count++
    } else {
      count =1
    }

    max = Math.max(count, max)
  }

  return max
}