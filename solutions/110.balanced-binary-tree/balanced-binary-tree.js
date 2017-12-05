/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */


const isBalanced = root => {
  let flag = true
  const dfs = node => {
    // depth of this node is 0
    if(!node) return 0

    let left = dfs(node.left)
    let right = dfs(node.right)

    if(Math.abs(left - right) > 1) flag = false

    return Math.max(left, right) +1
  }

  dfs(root)
  return flag
}