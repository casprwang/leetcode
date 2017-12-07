/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = s => {
  let res = []
  const bfs = (list, pos)=>{
    if(list.length> 0&& pos === s.length ){
      res.push(list)
    }
    for(let i = pos; i<s.length; i++) {
      let temp = s.substring(pos, i+1)
      if(isPali(temp)){
        bfs([...list, temp], i+1)
      }
    }
  }

  bfs([], 0)

  return res
}

// const isPali = s => [...s].reverse().join('') === s;

const isPali = s => {
  let high = s.length-1
  let low = 0
  while (low < high) {
    if (s.charAt(low++) !== s.charAt(high--)) return false
  }

  return true
}