/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// 1
// const isSameTree = (p, q) => {
//   if (p === null && q === null) {
//     return true
//   }
//   if (p === null || q === null) {
//     return false
//   }
//   if (p.val === q.val) {
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
//   }
//   return false
// }


// 2
// const isSameTree = (p, q) => {
//   flag = true

//   const dfs = (a, b) => {
//     if (!flag) return
//     if (!isEqual(a, b)) {
//       flag = false
//       return
//     }
//     if (a && b && a.left !== undefined && b.left !== undefined)
//       dfs(a.left, b.left)
//     if (a && b && a.right !== undefined && b.right !== undefined)
//       dfs(a.right, b.right)
//   }


//   dfs(p, q)
//   return flag
// }

// const isEqual = (a, b) => {
//   if (a === null && b === null) return true
//   if (a === null && b !== null) return false
//   if (a !== null && b === null) return false
//   if (a.val === b.val) return true
//   return false
// }

// 3
// let flag
// const isSameTree = (p, q) => {
//   flag = true
//   dfs(p, q)
//   return flag
// }

// const dfs = (a, b) => {
//   if (!flag) return
//   if (!isEqual(a, b)) {
//     flag = false
//     return
//   }
//   if (a && b && a.left !== undefined && b.left !== undefined)
//     dfs(a.left, b.left)
//   if (a && b && a.right !== undefined && b.right !== undefined)
//     dfs(a.right, b.right)
// }

// const isEqual = (a, b) => {
//   if (a === null && b === null) return true
//   if (a === null && b !== null) return false
//   if (a !== null && b === null) return false
//   if (a.val === b.val) return true
//   return false
// }


const isSameTree = (p, q) => {
  let flag = true

  const dfs = (a, b) => {
    if (a === null && b === null) return
    if (!flag) return
    if (!isEqual(a, b)) {
      flag = false
      return
    }
    if (a && b && a.left !== undefined && b.left !== undefined)
      dfs(a.left, b.left)
    if (a && b && a.right !== undefined && b.right !== undefined)
      dfs(a.right, b.right)
  }

  dfs(p, q)
  return flag
}

const isEqual = (a, b) => {
  if (a === null && b === null) return true
  if (a === null && b !== null) return false
  if (a !== null && b === null) return false
  if (a.val === b.val) return true
  return false
}
