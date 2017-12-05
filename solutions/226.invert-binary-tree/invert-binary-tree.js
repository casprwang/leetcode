// const invertTree = root => {
//   if (!root) return null

//   let tmp = invertTree(root.right)
//   root.right = invertTree(root.left)
//   root.left = tmp

//   return root
// }

const invertTree = root => {
  if (!root) return null
  ;[root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  return root
}
