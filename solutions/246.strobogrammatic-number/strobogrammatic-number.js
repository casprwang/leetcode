/**
 * @param {string} num
 * @return {boolean}
 */
const map = new Map([
  ['6', '9'],
  ['8', '8'],
  ['1', '1'],
  ['9', '6'],
  ['0', '0'],
])

const isStrobogrammatic = nums => {
  let p1 = 0
  let p2 = nums.length - 1

  while (p1 <= p2) {
    if (p1 === 0 && nums[p2] === '0') return false

    let left = nums[p1]
    let right = nums[p2]

    if (map.get(left) !== right) return false

    p2--
    p1++
  }

  return true
}
