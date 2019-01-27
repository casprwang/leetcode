# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        one = ''
        two = ''
        while l1:
            one = str(l1.val) + one
            l1 = l1.next

        while l2:
            two = str(l2.val) + two
            l2 = l2.next

        ans = str(int(one) + int(two))

        dummy = ListNode(0)
        ret = dummy

        for i in range(len(ans) - 1, -1, -1):
            dummy.next = ListNode(ans[i])
            dummy = dummy.next

        return ret.next
