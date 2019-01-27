from collections import deque


class MovingAverage:

    def __init__(self, size):
        """
        Initialize your data structure here.
        :type size: int
        """
        self.size = size
        self.q = deque()

    def next(self, val):
        """
        :type val: int
        :rtype: float
        """
        self.q.append(val)

        if len(self.q) == self.size + 1:
            self.q.popleft()

        return sum(self.q) / len(self.q)


# Your MovingAverage object will be instantiated and called as such:
# obj = MovingAverage(size)
# jkj jj param_1 = obj.next(val)
