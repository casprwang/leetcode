    /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
const closestValue = (root, target) => {
  let diff = Infinity
  let res

  const dfs = node => {
    if (Math.abs(node.val - target) < diff) {
      diff = Math.abs(node.val - target)
      res = node.val
    }

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
