/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.arr = nums
}

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.arr
}

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let random
  const len = this.arr.length
  let shuffled = new Array(len)

  for (let i = 0; i < len; i++) {
    random = ~~(Math.random() * (i + 1))
    if (i !== random) {
      shuffled[i] = shuffled[random]
    }
    shuffled[random] = this.arr[i]
  }

  return shuffled
}
