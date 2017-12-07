/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
const merge = intervals => {
  if (intervals.length < 2) return intervals


  intervals.sort((a, b) => a.start - b.start)

  let res = []
  let end = intervals[0].end
  let start = intervals[0].start

  let p = 1

  // [1,2] [1,3]
  while (p < intervals.length) {
    let item = intervals[p]

    // overlap
    if (item.start <= end) {
      start = Math.min(start, item.start)
      end = Math.max(end, item.end)

      p++
      continue
    }

    // [1,2] [3  ,4]
    // s  e   i.s i.e
    if (item.start > end) {
      res.push([start, end])

      start = item.start
      end = item.end

      p++
      continue
    }

    // non - overlap
  }
  res.push([start, end])

  return res
}