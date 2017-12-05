/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root,k)=>{
  let res = []

  const dfs= node => {
    if(!node) return

    res.push(node.val)

    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)
  return res.sort((a,b)=>a-b)[k-1]
}