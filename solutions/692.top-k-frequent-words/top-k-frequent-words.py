import heapq


class Solution:
    def topKFrequent(self, words, k):
        """
        :type words: List[str]
        :type k: int
        :rtype: List[str]
        """
        m = {}

        for word in words:
            if word in m:
                m[word] += 1
            else:
                m[word] = 1

        # max heap
        h = []
        for key, val in m.items():
            heapq.heappush(h, (val * -1, key))

        ret = []
        while k:
            ret.append(heapq.heappop(h)[1])
            k -= 1

        return ret
