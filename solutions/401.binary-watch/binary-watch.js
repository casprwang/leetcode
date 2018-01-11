const readBinaryWatch = num => {
  let res = []

  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      if (count(i) + count(j) === num) res.push(leftPad(i, j))
    }
  }

  return res
}

const count = n => {
  return n
    .toString(2)
    .split('')
    .reduce((acc, e) => Number(acc) + Number(e), 0)
}

const leftPad = (i, j) => {
  if (i < 10) i = '' + i
  else i = '' + i

  if (j < 10) j = '0' + j
  else j = '' + j

  return `${i}:${j}`
};