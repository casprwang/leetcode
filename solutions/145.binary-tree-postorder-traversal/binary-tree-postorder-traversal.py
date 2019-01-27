# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def postorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        left
        right
        root
        """
        ret = []
        def traverse(node):
            if not node:
                return

            traverse(node.left)
            traverse(node.right)

            ret.append(node.val)

        traverse(root)
        return ret
