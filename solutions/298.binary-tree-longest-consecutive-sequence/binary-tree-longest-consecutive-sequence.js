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
const longestConsecutive = root => {
  if(!root) return 0
  let max = 0

  const dfs = (node, count, target) => {
    if (!node) return
    if (node.val === target) {
      count++
    } else {
      count = 1
    }
    max = Math.max(count, max)

    dfs(node.left, count, node.val + 1)
    dfs(node.right, count, node.val + 1)
  }

  dfs(root, 0, root.val)

  return max
};