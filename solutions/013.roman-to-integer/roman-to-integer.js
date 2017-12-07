/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
  let map = new Map([
    ["I", 1],
    ["X", 10],
    ["C", 100],
    ["M", 1000],
    ["V", 5],
    ["L", 50],
    ["D", 500],
  ])

  let sum = 0

  for(let i = 0; i<s.length; i++) {
    let item = map.get(s[i])
    let nextItem = i+1 === s.length? 0: map.get(s[i+1])

    if(nextItem>item) {
      sum += nextItem - item
      i++
    } else 
      sum += item
  }

  return sum
}