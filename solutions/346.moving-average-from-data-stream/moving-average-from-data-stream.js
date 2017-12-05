/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.size = size
  this.arr = []
}

/** 
* @param {number} val
* @return {number}
*/
MovingAverage.prototype.next = function(val) {
  this.arr.push(val)
  if (this.arr.length > this.size) {
    this.arr.shift()
    return this.arr.reduce((acc, e) => acc + e, 0) / this.size
  } else {
    return this.arr.reduce((acc, e) => acc + e, 0) / this.arr.length
  }
}

/** 
* Your MovingAverage object will be instantiated and called as such:
* var obj = Object.create(MovingAverage).createNew(size)
* var param_1 = obj.next(val)
*/
