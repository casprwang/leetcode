/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = root => {
  if (!root) return []

  let res = []

  const dfs = (node, temp) => {
    if (node.left === null && node.right === null) {
      res.push([...temp, node.val].join("->"))
      return
    }

    if (node.left) {
      dfs(node.left, [...temp, node.val])
    }

    if (node.right) {
      dfs(node.right, [...temp, node.val])
    }
  }

  dfs(root, [])

  return res
}