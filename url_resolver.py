with open("README.md", 'r') as f1, open("lol.md", 'w') as f2:
    for line in f1:
        if line.find == -1:
            f2.write(line)
        else:
            lol = line.replace('.&#x2F;', 'https://github.com/wangsongiam/leetcode/blob/master/', 1)
            f2.write(lol.replace('&#x2F;', '/'))


