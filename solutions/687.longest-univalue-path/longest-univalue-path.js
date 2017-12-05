
const longestUnivaluePath = root => {
  let max = 0

  const dfs = node => {
    if (node === null) return 0
    let left = dfs(node.left)
    let right = dfs(node.right)

    // let llen = 0
    // let rlen = 0

    if (node.left && node.val === node.left.val) {
      left++
    } else {
      left = 0
    }

    if (node.right && node.val === node.right.val) {
      right++
    } else {
      right = 0
    }

    max = Math.max(max, left + right)
    return Math.max(left, right)
  }

  dfs(root)
  return max
}
