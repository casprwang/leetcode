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
const minDepth = root => {
  if(root === null) return 0
  let set = new Set()

  const iter = (temp, counter) => {
    if(temp.left === null && temp.right === null) {
      set.add(counter)
    }
    counter++
    if(temp.left !== null) iter(temp.left, counter)
    if(temp.right!== null) iter(temp.right, counter)
  }
  iter(root, 1)
  return Math.min(...set)
}