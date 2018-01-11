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
const maxDepth = root => {
  if (!root) return 0

  let max = 1

  const walk = node => {
    if(!node) return 0

    let leftDepth = walk(node.left) + 1
    let rightDepth = walk(node.right) + 1

    let depth = Math.max(leftDepth, rightDepth)

    max = Math.max(depth,max)

    return depth
  }
    
  walk(root)
  return max
}