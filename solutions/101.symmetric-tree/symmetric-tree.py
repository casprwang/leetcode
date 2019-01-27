# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if not root:
            return True

        def check(left, right):
            if not left and not right:
                return True

            if left and right:
                if left.val != right.val:
                    return False
                return check(left.left, right.right) and check(left.right, right.left)

            return False

        return check(root.left, root.right)
