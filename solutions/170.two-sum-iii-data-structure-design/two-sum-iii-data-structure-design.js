/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
  this.arr = []
}

/**
* Add the number to an internal data structure.. 
* @param {number} number
* @return {void}
*/
TwoSum.prototype.add = function(number) {
  this.arr.push(number)
}

/**
* Find if there exists any pair of this.arr which sum is equal to the value. 
* @param {number} value
* @return {boolean}
*/
TwoSum.prototype.find = function(value) {
  let set = new Set()

  for (let i = 0; i < this.arr.length; i++) {
    if (set.has(this.arr[i])) {
      return true
    }

    set.add(value - this.arr[i])
  }

  return false
}

/** 
* Your TwoSum object will be instantiated and called as such:
* var obj = Object.create(TwoSum).createNew()
* obj.add(number)
* var param_2 = obj.find(value)
*/
