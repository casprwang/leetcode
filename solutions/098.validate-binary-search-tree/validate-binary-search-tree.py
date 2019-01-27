# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def isValidBST(self, root, less_than=float('inf'), larger_than=float('-inf')):
        if not root:
            return True

        if root.val >= less_than:
            return False

        if root.val <= larger_than:
            return False

        return self.isValidBST(root.left, min(less_than, root.val), larger_than) and \
            self.isValidBST(root.right, less_than,
                            max(larger_than, root.val))
