# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
import heapq


class Solution:
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        heap = []
        for l in lists:
            while l:
                heapq.heappush(heap, l.val)
                l = l.next

        dummy = ListNode(None)
        ret = dummy
        while heap:
            dummy.next = ListNode(heapq.heappop(heap))
            dummy = dummy.next

        return ret.next
