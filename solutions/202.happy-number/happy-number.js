/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = n => {
  let set = new Set()

  while (n !== 1) {
    if (set.has(n)) return false
    set.add(n)

    let tmp = 0
    n.toString().split('').forEach(e=>{
      tmp+= e**2
    })
    n = tmp
    
  }
  return true

}

console.log(isHappy(7))
