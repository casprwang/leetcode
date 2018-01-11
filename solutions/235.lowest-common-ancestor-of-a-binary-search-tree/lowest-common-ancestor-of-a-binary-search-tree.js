/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
  while (root) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left
      continue
    }

    if (p.val > root.val && q.val > root.val) {
      root = root.right
      continue
    }

    return root
  }

}