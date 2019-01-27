# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def isPalindrome(self, head):
        """
        :type head: ListNode
        :rtype: bool
        1 2 3 4 5
        1 2 3 4
          | |
        """

        slow = head
        fast = head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        if fast and fast.next is None:
            slow = slow.next

        def reverse(prev, head):
            if not head:
                return prev

            next = head.next
            head.next = prev

            return reverse(head, next)

        ref = reverse(None, slow)

        while ref:
            if ref.val != head.val:
                return False

            ref = ref.next
            head = head.next

        return True
