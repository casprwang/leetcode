# Definition for an interval.
# class Interval:
#     def __init__(self, s=0, e=0):
#         self.start = s
#         self.end = e

class Solution:
    def merge(self, intervals):
        """
        :type intervals: List[Interval]
        :rtype: List[Interval]
        """
        intervals.sort(key=lambda x: x.start)
        ret = []

        if not intervals:
            return ret

        start = intervals[0].start
        end = intervals[0].end

        for i in range(len(intervals)):
            if i == 0 and i != len(intervals) - 1:
                continue
            elif i == 0 and i == len(intervals) - 1:
                ret += [[start, end]]
                return ret


            cur_start = intervals[i].start
            cur_end = intervals[i].end
            """
        1 .merge second start and reset end
            1      3
          start    end
            2      4
        cur_start cur_end


        2. push first and reset start & end
            1      2
            3      4
            """
            if cur_start <= end:
                end = max(end, cur_end)
                if i == len(intervals) - 1:
                    ret += [[start, end]]
                continue

            elif cur_start >= end:
                ret += [[start, end]]
                start = cur_start
                end = cur_end
                if i == len(intervals) - 1:
                    ret += [[start, end]]
                continue


        return ret
