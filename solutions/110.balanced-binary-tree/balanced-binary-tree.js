/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// top down
// const isBalanced = root => {
//   let flag = true

//   const walk = node => {
//     if (!node) return 0

//     let left = walk(node.left) + 1
//     let right = walk(node.right) + 1

//     if (Math.abs(left - right) > 1) flag = false

//     return Math.max(left, right)
//   }

//   walk(root)

//   return flag
// }


const isBalanced = root => {
  const walk = node => {
    if (!node) return 0

    let left = walk(node.left) + 1
    let right = walk(node.right) + 1

    if (left === 0 || right === 0) return -1

    if (Math.abs(left - right) > 1) return -1

    return Math.max(left, right)
  }

  return walk(root) !== -1
}