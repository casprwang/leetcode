/**
 * @param {number} area
 * @return {number[]}
 */

const constructRectangle = area => findClosestPair(getPossibles(area))

const getPossibles = area => {
  let pairSet = new Set()
  for (let i = 1; i <= parseInt(Math.sqrt(area)); i += 1) {
    if (Number.isInteger(area / i)) {
      pairSet.add([area / i, i])
    }
  }
  return [...pairSet]
}

const getAbsDif = set => {
  let arr = Array.from(set)
  return Math.abs(arr[0] - arr[1])
}

const findClosestPair = set => {
  let initialDiff = getAbsDif(set[0])
  return [...set].reduce(
    (acc, cur) => {
      if (getAbsDif(cur) < acc.dif) acc = { dif: getAbsDif(cur), pair: cur }
      return acc
    },
    { dif: initialDiff, pair: set[0] }
  ).pair
}
