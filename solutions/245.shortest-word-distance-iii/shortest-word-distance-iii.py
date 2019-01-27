class Solution:
    def shortestWordDistance(self, words, word1, word2):
        """
        :type words: List[str]
        :type word1: str
        :type word2: str
        :rtype: int
        1 3 4
        2 5
        """
        last_i = float('-inf')
        last_w = word1
        ret = float('inf')

        for i, w in enumerate(words):
            if word1 == word2 and w == word1:
                ret = min(ret, i - last_i)
                last_i = i
                continue

            if w == word1 and last_w == word1:
                last_w = word1
                last_i = i
                continue

            if w == word2 and last_w == word2:
                last_w = word2
                last_i = i
                continue

            if w == word1 and last_w == word2:
                ret = min(ret, i - last_i)
                last_i = i
                last_w = w
                continue

            if w == word2 and last_w == word1:
                ret = min(ret, i - last_i)
                last_i = i
                last_w = w
                continue

        return ret
