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
const sumNumbers = (root) => {
  if (!root) return 0
  let sum = 0

  const walk = (node, temp) => {
    if (!node) return

    if (!node.left && !node.right) {
      // leaf
      sum += (Number(temp + node.val))
    }

    if (node.left) walk(node.left, temp + node.val)
    if (node.right) walk(node.right, temp + node.val)
  }

  walk(root, '')

  return sum
}