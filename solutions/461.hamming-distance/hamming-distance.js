/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
//const hammingDistance = (x,y) => {
//  let xx = x.toString(2)
//  let yy = y.toString(2)
//  let length = Math.max(xx.length,yy.length)
//  let counter = 0
//  for (let i =0; i<length; i++) {
//    if(xx.padStart(length,'0')[i] !== yy.padStart(length, '0')[i]) counter ++
//  }
//  return counter
//}


const hammingDistance = (x, y) => {
  let res = 0
  while (x || y) {
    res += (x & 1) ^ (y & 1)
    x >>= 1
    y >>= 1
  }
  return res
}
