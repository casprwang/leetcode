/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (k, n, result = []) => {
  const iter = temp => {
    if(temp.length===n) result.push([...temp])
    else {
      for (let i = 1; i<=k; i++) {
        if(i<=temp[temp.length -1]) continue
        temp.push(i)
        iter(temp)
        temp.pop()
      }
    }
  }
  iter([])
  return result
}