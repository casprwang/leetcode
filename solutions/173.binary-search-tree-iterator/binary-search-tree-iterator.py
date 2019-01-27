# Definition for a  binary tree node
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
import heapq


class BSTIterator(object):
    def __init__(self, root):
        """
        :type root: TreeNode
        """
        self.heap = []
        self.pointer = 0

        def traverse(node):
            # dfs
            if not node:
                return

            self.heap.append(node.val)
            traverse(node.left)
            traverse(node.right)

        traverse(root)
        heapq.heapify(self.heap)

    def hasNext(self):
        """
        :rtype: bool
        [1]
        0
        """
        return bool(len(self.heap))

    def next(self):
        """
        :rtype: int
        """
        ret = heapq.heappop(self.heap)
        self.pointer += 1
        return ret

# Your BSTIterator will be called like this:
# i, v = BSTIterator(root), []
# while i.hasNext(): v.append(i.next())
