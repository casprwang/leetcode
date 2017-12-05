/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isSubtree = (s, t) => {
  if (!s) return false

  if (isSame(s, t)) return true

  return isSubtree(s.left, t) || isSubtree(s.right, t)
}

const isSame = (s, t) => {
  if (!s && t) return false
  if (s && !t) return false
  if (!s && !t) return true
  if (s.val === t.val) return isSame(s.left, t.left) && isSame(s.right, t.right)
  else return false
}
