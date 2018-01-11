/**
 * @param {string} s
 * @return {number}
 */
// const lengthOfLongestSubstring = s => {
//   let counter = 0
//   let set = new Set()

//   const iter = temp => {
//     if (temp.length === 0) return
//     if (set.has(temp)) return
//     set.add(temp)
//     if (!hasDup(temp)) {
//       if (temp.length > counter) counter = temp.length
//     }

//     iter(temp.substring(0, temp.length - 1))
//     iter(temp.substring(1, temp.length))
//   }

//   iter(s)

//   return counter
// }

// const hasDup = s => {
//   let set = new Set()
//   for (let i = 0; i < s.length; i++) {
//     let item = s[i]
//     if (set.has(s[i])) return true
//     set.add(s[i])
//   }
//   return false
// }

// const lengthOfLongestSubstring = s => {
//   let set = new Set()
//   let start = 0
//   let max = 0

//   for(let i=0; i<s.length;i++){
//     let item = s[i]

//     if(!set.has(item)) set.add(item)
//     else {
//       while(1) {
//         if(s[start] === item){
//           start++
//           break
//         }

//         set.delete(s[start])
//         start++
//       }
//     }

//     max = Math.max(max, i - start + 1)
//   }

//   return max
// };


const lengthOfLongestSubstring = s => {
  let p1 = 0
  let p2 = 0
  let max = 0
  const set = new Set()

  while (p2 < s.length) {
    if (!set.has(s[p2])) {
      set.add(s[p2])
      p2++

      max = Math.max(max, set.size)
    } else {
      set.delete(s[p1])
      p1++
    }
  }

  return max
};
