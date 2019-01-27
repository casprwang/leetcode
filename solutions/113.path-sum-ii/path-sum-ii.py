# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def pathSum(self, root, sum):
        """
        :type root: TreeNode
        :type sum: int
        :rtype: List[List[int]]
        """
        if not root:
            return []

        ret = []

        def traverse(node, temp, path):
            nonlocal ret
            # leaf
            if not node.left and not node.right:
                if temp == node.val:
                    ret.append(path + [node.val])
                    return

            if node.left:
                traverse(node.left, temp - node.val, path + [node.val])

            if node.right:
                traverse(node.right, temp - node.val, path + [node.val])

        traverse(root, sum, [])
        return ret
