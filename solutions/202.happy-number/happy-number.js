/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = n => {
  let set = new Set()

  while (!set.has(n)) {
    set.add(n)

    if (n === 1) return true

    n = calc(n)
  }

  return false
}

const calc = n => {
  // int -> int
  return [...String(n)].reduce((acc, e) => {
    return acc + Number(e) ** 2
  }, 0)
}