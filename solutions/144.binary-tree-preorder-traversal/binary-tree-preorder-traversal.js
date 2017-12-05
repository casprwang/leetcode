/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal(root) {
  if (!root) return []

  const res = []

  const dfs = node => {
    res.push(node.val)

    if (node.left) {
      dfs(node.left)
    }

    if (node.right) {
      dfs(node.right)
    }
  }

  dfs(root)

  return res
}
