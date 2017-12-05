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
  const iter = (temp, counter) => {
    if (counter > max) {
      max = counter
    }
    if (temp === null) return
    counter++
    if (temp.left !== null) {
      iter(temp.left, counter)
    }
    if (temp.right !== null) {
      iter(temp.right, counter)
    }
  }

  iter(root, 1)
  return max
}