/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// const minDepth = root => {
//   let counter = 0

//   const iter = (node, depth) => {
//     if (!node) return

//     if (counter && depth >= counter) return

//     if (!node.left && !node.right) {
//       counter = depth
//       return
//     }

//     if (node.left) {
//       iter(node.left, depth + 1)
//     }
//     if (node.right) {
//       iter(node.right, depth + 1)
//     }

//   }

//   iter(root, 1)
//   return counter
// }

const minDepth = root => {
  if (!root) return 0
  let min = Infinity
  let count = 1

  const walk = (node, count) => {
    if (!node.left && !node.right) {
      min = Math.min(min, count)
    }

    count++
    if (node.left) {
      walk(node.left, count)
    }

    if (node.right) {
      walk(node.right, count)
    }

  }

  walk(root, count)
  return min
}