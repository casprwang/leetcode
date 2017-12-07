/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
  if (num>=0 && num < 10) return num
  return addDigits(num.toString().split("").reduce((acc,cur)=>{
    return acc+= Number(cur)
  }, 0))
}