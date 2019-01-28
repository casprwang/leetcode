with open("README.md", 'r') as f1, open("lol.md", 'w') as f2:
    for line in f1:
        if line.find('//leetcode.com') == -1:
            # print line
            f2.write(line)
        else:
            lol = line.replace(
                '.&#x2F;',
                'https://github.com/wangsongiam/leetcode/blob/master/', 1)
            # f2.write(lol.replace('&#x2F;', '/'))
            # s = '|001|[two-sum](https://leetcode.com/problems/two-sum/)| [javascript](https://github.com/wangsongiam/leetcode/blob/master/solutions/001.two-sum/two-sum.js)|Easy'
            middle = lol.replace('&#x2F;', '/')

            # f2.write(s)
            former = middle[middle.find("(") + 1:middle.find(")")]
            later = middle[middle.rfind('(') + 1:middle.rfind(')')]
            # if(later.startswith('https'))

            laterlater = later[later.rfind('/') + 1:]

            replacedlater = later.replace(laterlater, 'question.md')

            # print replacedlater
            final = middle.replace(former, replacedlater)
            f2.write(final)
