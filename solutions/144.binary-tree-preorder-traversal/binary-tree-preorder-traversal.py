class Solution:
    def preorderTraversal(self, root):
        ret = []
        s = [root]
        while s:
            cur = s.pop()
            if not cur:
                continue

            ret.append(cur.val)

            if cur.right:
                s.append(cur.right)

            if cur.left:
                s.append(cur.left)

        return ret

    
#     def preorderTraversal(self, root):
#         """
#         :type root: TreeNode
#         :rtype: List[int]
#         root
#         left
#         right
#         """
#         ret = []

#         def traverse(node):
#             if not node:
#                 return
#             ret.append(node.val)
#             traverse(node.left)
#             traverse(node.right)

#         traverse(root)
#         return ret
