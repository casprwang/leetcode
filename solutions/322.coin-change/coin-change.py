from collections import deque

class Solution:
    def coinChange(self, coins, amount):
        """
        :type coins: List[int]
        :type amount: int
        :rtype: int
        """
        if not amount:
            return 0

        if not coins:
            return -1

        count = 0
        q = deque([0])

        visited = [0] * (amount + 1)

        while q:
            count += 1

            for i in range(len(q)):
                val = q.pop()

                for c in coins:
                    next_val = val + c

                    if next_val > amount:
                        continue

                    if next_val == amount:
                        return count

                    if not visited[next_val]:
                        visited[next_val] = True
                        q.appendleft(next_val)

        return -1
