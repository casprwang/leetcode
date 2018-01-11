/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = root => {
  if (!root) return []

  let queue = [root]
  let res = []

  while (queue.length) {
    let cur
    let len = queue.length

    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      cur = node.val
    }
    res.push(cur)
  }

  return res
}