/**
 * @param {string} s
 * @return {boolean}
 */
// const checkRecord = s => {
//   let countL = 0
//   let countA = 0

//   let isL = false

//   for (let i = 0; i < s.length; i++) {
//     let item = s[i]

//     if (item === 'L') {
//       if (!isL) {
//         // pre is not L
//         countL = 1
//       } else {
//         // pre is L
//         countL++
//         if (countL > 2) return false
//       }

//       isL = true
//     } else {
//       ifL = false
//       countL = 0

//       if (item === 'A') countA++
//       if (countA > 1) return false
//     }
//   }

//   return true
// }

const checkRecord = s => !s.match(/(.*A.*A)|(.*LLL.*)/g)