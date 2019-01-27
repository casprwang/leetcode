class WordDistance:

    def __init__(self, words):
        """
        :type words: List[str]
        """
        self.map = {}
        for i, w in enumerate(words):
            self.map[w] = self.map.get(w, []) + [i]


    def shortest(self, word1, word2):
        """
        :type word1: str
        :type word2: str
        :rtype: int
        """
        list1 = self.map.get(word1)
        list2 = self.map.get(word2)

        w1 = 0
        w2 = 0
        ret = float('inf')

        while w1 < len(list1) and w2 < len(list2):
            i1 = list1[w1]
            i2 = list2[w2]
            ret = min(ret, abs(i1 - i2))

            if i1 > i2:
                w2 +=1
            else:
                w1 +=1

        return ret



# Your WordDistance object will be instantiated and called as such:
# obj = WordDistance(words)
# param_1 = obj.shortest(word1,word2)
