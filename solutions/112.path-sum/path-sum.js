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
  if (!root) return false

  let flag = false
  const dfs = (node, s) => {
    if (node.left === null && node.right === null) {
      if (node.val + s === sum) {
        flag = true
        return
      }
    }

    if (node.left) {
      dfs(node.left, s + node.val)
    }

    if (node.right) {
      dfs(node.right, s + node.val)
    }
  }

  dfs(root, 0)
  return flag
}
