# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def kthSmallest(self, root, k):
        """
        :type root: TreeNode
        :type k: int
        :rtype: int
        in order traversal
        """
        stack = []
        li = []

        while stack or root:
            if root:
                stack.append(root)
                root = root.left
            else:
                cur = stack.pop()
                li.append(cur.val)
                root = cur.right

        return li[k - 1]


#         heap = []

#         def traverse(node):
#             if not node:
#                 return

#             heapq.heappush(heap, node.val)

#             traverse(node.left)
#             traverse(node.right)

#         traverse(root)

#         while k - 1:
#             heapq.heappop(heap)
#             k -= 1

#         return heapq.heappop(heap)
