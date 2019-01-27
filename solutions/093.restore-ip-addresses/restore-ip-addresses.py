class Solution:
    def restoreIpAddresses(self, s):
        """
        :type s: str
        :rtype: List[str]
        """
        ret = []

        def traverse(pos, cnt, tmp):
            print(tmp)
            nonlocal ret, s

            if cnt == 0:
                if not s[pos:]:
                    return
                if len(s[pos:]) > 1 and s[pos:][0] == '0':
                    return

                if int(s[pos:]) < 256 and int(s[pos:]) > -1:
                    ret.append(tmp + s[pos:])
                return

            if (cnt + 1) * 3 < len(s) - pos:
                return

            for i in range(1, 4):  # 1 2 3
                if pos + i >= len(s):
                    return
                if len(s[pos:pos+i]) > 1 and s[pos:pos+i][0] == '0':
                    continue
                if int(s[pos:pos+i]) < 0 or int(s[pos:pos+i]) > 255 and s[pos:pos+i][0] != '0':
                    continue

                traverse(pos + i, cnt - 1, tmp + s[pos:pos+i] + '.')

        traverse(0, 3, '')

        return ret
