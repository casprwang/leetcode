class Solution:
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        map = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz',
        }
        if not digits:
            return []

        ret = []

        def traverse(tmp, pos):
            nonlocal digits

            if pos > len(digits):
                return

            if pos == len(digits):
                ret.append(tmp)
                return

            cur = map[digits[pos]]

            for c in cur:
                traverse(tmp + c, pos + 1)

        traverse('', 0)

        return ret
