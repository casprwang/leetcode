/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = (root, sum) => {
  let flag = false

  const walk = (node, target) => {
    if (!node) return

    if (node.val === target && !node.left && !node.right) flag = true

    walk(node.left, target - node.val)
    walk(node.right, target - node.val)
  }

  walk(root, sum)

  return flag
}