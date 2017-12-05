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
 * @return {number}
 */
const pathSum = (root, sum) => {
  if (!root) return 0

  let ans = 0
  let set = new Set()
  const dfs = (node, s) => {
    if (s === sum) ans++

    if (node.left) {
      dfs(node.left, s + node.left.val)
      if (!set.has(node.left)) {
        set.add(node.left)
        dfs(node.left, node.left.val)
      }
    }

    if (node.right) {
      dfs(node.right, s + node.right.val)
      if (!set.has(node.right)) {
        set.add(node.right)
        dfs(node.right, node.right.val)
      }
    }
  }

  dfs(root, root.val)
  return ans
}
