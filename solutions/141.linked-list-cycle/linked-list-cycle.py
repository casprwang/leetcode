# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        if not head:
            return False

        slow = head
        fast = head.next

        while fast and fast.next:
            if slow.val == fast.val:
                return True

            slow = slow.next
            fast = fast.next.next

        return False
