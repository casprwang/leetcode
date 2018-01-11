const map = new Map([
  ['2', 'abc'],
  ['3', 'def'],
  ['4', 'ghi'],
  ['5', 'jkl'],
  ['6', 'mno'],
  ['7', 'pqrs'],
  ['8', 'tuv'],
  ['9', 'wxyz'],
])

const letterCombinations = digits => {
  if (digits === '') return []

  let res = []

  const bfs = (temp, left) => {
    if (left.length === 0) {
      res.push(temp)
      return
    }

    let options = map.get(left[0])

    for (let i = 0; i < options.length; i++) {
      let item = options[i]
      bfs(temp + item, left.slice(1, left.length))
    }
  }

  bfs('', [...digits])

  return res
}
