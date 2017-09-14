/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = num =>
  Array(num + 1)
    .fill()
    .map((_, i) => i)
    .map(e =>
      Number(
        [...e.toString(2)].reduce(
          (acc, e) => Number(acc) + Number(e)
        )
      )
    )