import os
import re
import heapq

NEW_README = os.path.expanduser('~/dev/leetcode/README_NEW.md')
NEW2_README = os.path.expanduser('~/dev/leetcode/README_NEW2.md')
COM_README = os.path.expanduser('~/temp/lll/README.md')


l1 = []
l2 = []
lines = []



with open(NEW_README, 'r') as f_new:
    for l_new in f_new.readlines():
        m2 = re.search(r'\|([0-9]*?)\|', l_new)
        if m2:
            nn = m2.groups()[0]
            l2.append(nn)
            heapq.heappush(lines, (nn, l_new))


with open(COM_README,  'r') as f_com:
    for l_com in f_com.readlines():
        m1 = re.search(r'\|([0-9]*?)\|', l_com)
        if m1:
            n = m1.groups()[0]
            l1.append(n)
            if any(x[0] == n for x in lines):
                continue
            heapq.heappush(lines, (n, l_com))

with open(NEW2_README, 'w') as f_newer:
    while lines:
        f_newer.write(heapq.heappop(lines)[1])


# with open(COM_README,  'r') as f_com, open(NEW_README, 'r') as f_new, open(NEW2_README, 'w') as f_newer:
#     # l1 has what I need
#     lines_new = f_new.readlines()
#     lines_com = f_com.readlines()
#     for l_new in lines_new:
#         if l_old in lines_com:


    # for l in l1:
    #     if not l in l2:
    #         print(l)
