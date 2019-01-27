import os
import re

NEW_README = os.path.expanduser('~/dev/leetcode/README_NEW.md')
COM_README = os.path.expanduser('~/temp/lll/README.md')


with open(COM_README,  'r') as f_com, open(NEW_README, 'r') as f_new:
    l1 = []
    l2 = []
    for l_com in f_com.readlines():
        m1 = re.search(r'\|([0-9]*?)\|', l_com)
        if m1:
            n = m1.groups()[0]
            l1.append(n)

        # filtering python solutions to add

    for l_new in f_new.readlines():
        print(l_new)
        m2 = re.search(r'\|([0-9]*?)\|', l_new)

        if m2:
            nn = m2.groups()[0]
            l2.append(nn)

    for l in l1:
        if not l in l2:
            print(l)
