class Solution:
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        1 2 3
        1 2 4

        9 9
        1 0 0
        """
        carrier = False
        for i in range(len(digits) - 1, -1, -1):
            cur = digits[i]
            if i == len(digits) - 1:
                cur += 1
                if cur > 9:
                    carrier = True
                    digits[i] = cur % 10
                else:
                    carrier = False
                    digits[i] = cur
            else:
                cur += carrier
                if cur > 9:
                    carrier = True
                    digits[i] = cur % 10
                else:
                    carrier = False
                    digits[i] = cur

        if carrier:
            digits.insert(0, 1)

        return digits
