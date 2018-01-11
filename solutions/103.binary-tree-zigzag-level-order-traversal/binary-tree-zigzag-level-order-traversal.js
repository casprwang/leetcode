/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = root => {
  if (!root) return []

  let fromLeft = true
  let queue = [root]
  let res = []

  while (queue.length) {
    let curLevel = []
    let len = queue.length

    for (let i = 0; i < len; i++) {
      let node = queue.shift()

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      curLevel.push(node.val)
    }

    if (fromLeft) {
      res.push(curLevel)
      fromLeft = false
    } else {
      res.push(curLevel.reverse())
      fromLeft = true
    }
  }

  return res
}