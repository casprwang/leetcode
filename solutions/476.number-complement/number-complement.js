/**
 * @param {number} num
 * @return {number}
 */
const findComplement = num => {
  // get binary
  let binary = num.toString(2)
  let reversedArray = [...binary].map(e=>{
    if(Number(e) === 0) return 1
    if(Number(e) === 1) return 0
  })

  return parseInt(reversedArray.join(''), 2)
};