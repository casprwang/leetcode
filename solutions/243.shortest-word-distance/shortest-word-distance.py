class Solution:
    def shortestDistance(self, words, word1, word2):
        """
        :type words: List[str]
        :type word1: str
        :type word2: str
        :rtype: int
        """
        last = float('-inf')
        ret = float('inf')
        for i in range(len(words)):
            if last < 0 and words[i] in (word1, word2):
                last = i
                continue

            if words[i] in (word1, word2):
                if words[i] == words[last]:
                    last = i
                else:
                    ret = min(ret, i - last)
                    last = i

        return ret
