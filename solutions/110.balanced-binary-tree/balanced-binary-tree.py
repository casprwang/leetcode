# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def isBalanced(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        abs(left_depth, right_depth) > 1
        """

        def traverse(root):
            if not root:
                return 0

            left_height = traverse(root.left)
            right_height = traverse(root.right)

            if left_height is -1 or right_height is -1 or abs(left_height - right_height) > 1:
                return -1

            return max(left_height, right_height) + 1

        return traverse(root) is not -1
