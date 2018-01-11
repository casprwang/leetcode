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
const closestValue = (root, value) => {
  let diff = Number.MAX_SAFE_INTEGER
  let res

  const iter = (node) => {
    if (!node) return

    let abs = Math.abs(node.val - value)

    if (abs < diff) {
      res = node.val
      diff = abs
    }

    iter(node.left)
    iter(node.right)
  }

  iter(root)

  return res
}
