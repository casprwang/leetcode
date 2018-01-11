/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
// func longestConsecutive(root *TreeNode) int {
// 	if root == nil {
// 		return 0
// 	}

// 	return dfs(root, root.Val, 0)
// }

// func dfs(node *TreeNode, target int, counter int) int {
// 	if node == nil {
// 		return counter
// 	}

// 	if node.Val == target {
// 		counter++
// 	} else {
// 		counter = 1
// 	}

// 	return getMax(counter, getMax(dfs(node.Left, node.Val+1, counter), dfs(node.Right, node.Val+1, counter)))
// }

// func getMax(a, b int) int {
// 	if a > b {
// 		return a
// 	} else {
// 		return b
// 	}
// }

func longestConsecutive(root *TreeNode) int {
	if root == nil {
		return 0
	}

	max := 0

	dfs(root, 0, root.Val, &max)

	return max
}

func dfs(node *TreeNode, counter int, target int, max *int) {
	if node == nil {
		return
	}

	if node.Val == target {
		counter++
	} else {
		counter = 1
	}

	*max = getMax(counter, *max)

	dfs(node.Left, counter, node.Val+1, max)
	dfs(node.Right, counter, node.Val+1, max)
}

func getMax(a, b int) int {
	if a > b {
		return a
	} else {
		return b
	}
}
