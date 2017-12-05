/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = (equations, values, queries) => {
  let m = equations.length
  let n = queries.length

  const res = new Array(n).fill(parseFloat(-1))

  let map1 = new Map()
  let map2 = new Map()

  for (let i = 0; i < m; i++) {
    if (!map1.has(equations[i][0])) {
      map1.set(equations[i][0], [equations[i][1]])
      map2.set(equations[i][0], [values[i]])
    } else {
      let temp1 = map1.get(equations[i][0])
      temp1.push(equations[i][1])
      let temp2 = map2.get(equations[i][0])
      temp2.push(values[i])
      map1.set(equations[i][0], temp1)
      map2.set(equations[i][0], temp2)
    }
    if (!map1.has(equations[i][1])) {
      map1.set(equations[i][1], [equations[i][0]])
      map2.set(equations[i][1], [1 / values[i]])
    } else {
      let temp1 = map1.get(equations[i][1])
      temp1.push(equations[i][0])
      let temp2 = map2.get(equations[i][1])
      temp2.push(1 / values[i])
      map1.set(equations[i][1], temp1)
      map2.set(equations[i][1], temp2)
    }
  }

  for (let i = 0; i < n; i++) {
    let q = queries[i]
    if (!map1.has(q[0]) || !map1.has(q[1])) {
      continue
    }
    const set = new Set()
    if (q[0] === q[1]) {
      res[i] = parseFloat(1)
    } else {
      res[i] = parseFloat(dfs(q[0], q[1], map1, map2, set))
    }
  }
  return res
}

function dfs(start, end, map1, map2, set) {
  let list1 = map1.get(start)
  let list2 = map2.get(start)
  set.add(start)
  if (list1.indexOf(end) >= 0) {
    return list2[list1.indexOf(end)]
  } else {
    for (let i = 0; i < list1.length; i++) {
      if (set.has(list1[i])) {
        continue
      }
      let temp = dfs(list1[i], end, map1, map2, set)

      if (temp !== -1) {
        return list2[i] * temp
      }
    }
  }
  set.delete(start)
  return -1
}