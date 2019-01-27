class Solution:
    def fizzBuzz(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        ret = []

        for i in range(n):
            cur = i + 1

            if cur % 3 == 0:
                if cur % 5 == 0:
                    ret.append('FizzBuzz')
                else:
                    ret.append('Fizz')
            elif cur % 5 == 0:
                ret.append('Buzz')
            else:
                ret.append(str(cur))

        return ret
