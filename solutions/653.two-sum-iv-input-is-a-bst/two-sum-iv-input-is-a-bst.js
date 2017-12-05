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
 * @return {boolean}
 */
// var findTarget = function(root, k) {
//     let set = new Set();
//     let found = false;
    
//     let pushValue = function(node){
//         if(found) return;        
//         else if(!node) return;
//         else{            
//             if(set.has(k - node.val)){
//                 found = true;
//                 return;                    
//             }                  
//             set.add(node.val);
//             pushValue(node.left);
//             pushValue(node.right);
//         }
//     }        
//     pushValue(root);    
//     return found;        
// };

const findTarget = (root, k) => {
  let set = new Set()
  let flag = false

  const dfs = (node) => {
    if(!node) return
    if(set.has(k - node.val)) {
      flag = true
      return
    }
    set.add(node.val)
    
    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)

  return flag
}