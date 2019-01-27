# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def inorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        left
        root
        right
        """
        ret = []

        def traverse(node):
            if not node:
                return

            traverse(node.left)
            ret.append(node.val)
            traverse(node.right)

        traverse(root)

        return ret
