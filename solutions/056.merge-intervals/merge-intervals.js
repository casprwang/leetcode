const merge = intervals => {
  if (!intervals.length) return []
  intervals.sort((a, b) => a.start - b.start)

  let len = intervals.length

  let end = intervals[0].end
  let start = intervals[0].start

  let res = []

  for (let i = 1; i < len; i++) {
    let item = intervals[i]

    let curStart = item.start
    let curEnd = item.end

    if (curStart <= end) {
      // connected
      start = Math.min(start, curStart)
      end = Math.max(end, curEnd)
    } else {
      // disconnected
      res.push(new Interval(start, end))
      start = curStart
      end = curEnd
    }
  }

  res.push(new Interval(start, end))

  return res
}