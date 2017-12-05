/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
// const mergeTrees = (t1, t2) => {
//   if (!t1) return t2

//   if (!t2) return t1
//   else {
//     t1.val += t2.val
//     t1.left = mergeTrees(t1.left, t2.left)
//     t1.right = mergeTrees(t1.right, t2.right)

//     return t1
//   }
// }

const mergeTrees = (t1, t2) => {
  if (!t1 && !t2) return null

  let node = new TreeNode((t1 ? t1.val : 0) + (t2 ? t2.val : 0))

  node.left = mergeTrees(t1 ? t1.left : null, t2 ? t2.left : null)
  node.right = mergeTrees(t1 ? t1.right : null, t2 ? t2.right : null)

  return node
}

