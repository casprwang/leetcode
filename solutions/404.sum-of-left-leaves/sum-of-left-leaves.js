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

// const sumOfLeftLeaves = (root)=>{
//   if(!root) return 

//   let sum = 0
//   const dfs = node => {
//     if(node.left && !node.left.left&&!node.left.right) {
//       sum+=node.left.val
//       return
//     }

//     if(node.right) {
//       dfs(node.right)
//     }

//     if(node.left&&!node.left.left && node.left.right){
//       dfs(node.left.right)
//     }

//     if(node.left&&node.left.left&&!node.left.right) {
//       dfs(node.left)
//     }
//   }

//   dfs(root)

//   return sum
// };


const sumOfLeftLeaves = root => {
  let result = 0

  const sumleft = (node) => {
    if (node === null) return
    if (
      node.left !== null &&
      node.left.left === null &&
      node.left.right === null
    ) {
      result += node.left.val
    }
    sumleft(node.left)
    sumleft(node.right)
  }

  sumleft(root)
  return result
}



