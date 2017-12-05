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
 * @return {number[][]}
 */
const pathSum = (root, sum) => {
  if(!root) return []
  let res = []

  const dfs = (node, target, temp) => {

    if (node.left === null && node.right === null) {
      if (target === node.val) {
        res.push([...temp, node.val])
      }

      return
    }

    if (node.left) {
      dfs(node.left, target - node.val, [...temp, node.val])
    }

    if (node.right) {
      dfs(node.right, target - node.val, [...temp, node.val])
    }
  }

  dfs(root, sum, [])

  return res
}
