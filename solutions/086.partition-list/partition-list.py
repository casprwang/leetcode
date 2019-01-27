# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def partition(self, head, x):
        """
        :type head: ListNode
        :type x: int
        :rtype: ListNode
        """
        # smaller
        d1 = ListNode(0)
        h1 = d1
        # larger
        d2 = ListNode(0)
        h2 = d2

        while head:
            if x > head.val:
                d1.next = ListNode(head.val)
                d1 = d1.next
            else:
                d2.next = ListNode(head.val)
                d2 = d2.next
            head = head.next

        d1.next = h2.next
        return h1.next
