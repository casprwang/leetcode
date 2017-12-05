/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = people => {
  people.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    } else {
      return b[0] - a[0]
    }
  })

  let result = []

  people.forEach(e => {
    result.splice(e[1], 0, e)
  })
  return result
}