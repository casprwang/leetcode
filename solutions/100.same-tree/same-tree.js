/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// const isSameTree = (p, q) => {
//   if (p === null && q === null) return true
//   if (p !== null && q === null) return false
//   if (p === null && q !== null) return false
//   if (p.val !== q.val) return false

//   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
// }

const isSameTree = (p, q) => {
  if (!p && !q) return true
  if (p && !q) return false
  if (!p && q) return false
  if (p.val !== q.val) return false

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}