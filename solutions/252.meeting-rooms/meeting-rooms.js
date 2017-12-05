/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {boolean}
 */
const canAttendMeetings = (intervals) => {
  let flag = true
  
  intervals.sort((a,b)=>a.start - b.start)
    
  intervals.reduce((acc,e)=>{
    if(e.start < acc) {
      flag = false
    }
    acc = e.end
    return acc
  }, 0)

  return flag
}