/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = function(list1, list2) {
  let map = new Map()
  let res = []
  let min = 9999
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i)
  }
  for (let i = 0; i < list2.length; i++) {
    if (map.has(list2[i])) {
      let j = map.get(list2[i])
      if (i + j < min) {
        min = i + j
        res = []
        res.push(list2[i])
      } else if (i + j === min) {
        res.push(list2[i])
      }
    }
  }
  return res
}
