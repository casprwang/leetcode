# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def sortedListToBST(self, head):
        """
        :type head: ListNode
        :rtype: TreeNode
        """
        if not head:
            return None

        slow = head
        fast = head
        prev = None

        while fast and fast.next:
            prev = slow
            slow = slow.next
            fast = fast.next.next

        if prev:
            prev.next = None
        else:
            head = None

        root = TreeNode(slow.val)
        root.left = self.sortedListToBST(head)
        root.right = self.sortedListToBST(slow.next)

        return root

        # li = []

        # while head:
        #     li.append(head.val)
        #     head = head.next

        # def traverse(li):
        #     m = len(li) // 2
        #     if m == len(li):
        #         return None

        #     root = TreeNode(li[m])
        #     root.left = traverse(li[:m])
        #     root.right = traverse(li[m+1:])

        #     return root

        # return traverse(li)
