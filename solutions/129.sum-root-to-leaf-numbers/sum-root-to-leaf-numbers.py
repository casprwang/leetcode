# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def sumNumbers(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        ret = 0
        if not root:
            return ret

        def traverse(node, temp):
            nonlocal ret
            if not node.left and not node.right:
                ret += temp * 10 + node.val

            if node.left:
                traverse(node.left, temp * 10 + node.val)

            if node.right:
                traverse(node.right, temp * 10 + node.val)

        traverse(root, 0)

        return ret
