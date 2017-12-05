/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
const minMeetingRooms = intervals => {
  let start = [],
    end = []

  intervals.forEach(interval => {
    start.push(interval.start)
    end.push(interval.end)
  })

  start.sort((a, b) => a - b)

  end.sort((a, b) => a - b)

  let rooms = 0
  let endpoint = 0

  for (var i = 0; i < intervals.length; i++) {
    if (start[i] < end[endpoint]) {
      rooms++
    } else {
      endpoint++
    }
  }
  return rooms
}
