var MyCalendar = function() {
  this.arr = []
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  for (let i = 0; i < this.arr.length; i++) {
    let item = this.arr[i]
    // false
    // start on the left
    if (start < item[0] && end > item[0]) return false

    if (start >= item[0] && end <= item[1]) return false

    // end on the right
    if (start < item[1] && end > item[1]) return false
    else continue
    // if(start >= item[1])
  }
  this.arr.push([start, end])
  return true
}
