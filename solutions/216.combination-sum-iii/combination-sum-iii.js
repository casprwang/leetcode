/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = (
  k, n,
  output=[]
) => {
  const iter = (temp) => {
    if(
      temp.length ===k 
    &&temp.reduce((acc,e)=> acc+e) ===n 
    ) output.push([...temp])
    else {
      for (let i = 1; i<=9; i++){
        if (temp.length > 0&&i<=temp[temp.length -1]) continue
        iter([...temp, i])
      }
    }
  }
  iter([])
  return output
}