# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def closestValue(self, root, target):
        """
        :type root: TreeNode
        :type target: float
        :rtype: int
        """
        cur_dit = float('inf')
        ret = None

        def dfs(node):
            nonlocal cur_dit, ret, target
            if not node:
                return

            if abs(node.val - target) < cur_dit:
                ret = node.val
                cur_dit = abs(node.val - target)

            dfs(node.left)
            dfs(node.right)

        dfs(root)
        return ret
