/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = num => {
  // using binary search
  end = num
  begin = 1
  while (end > begin + 1) {
    mid = parseInt((end + begin) / 2)
    if (mid ** 2 > num) end = mid
    else if (mid ** 2 < num) begin = mid
    else return true
  }
  return false || end ** 2 === num
}