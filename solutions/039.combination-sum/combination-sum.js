/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = 
  (candidates, target)=> {
    candidates.sort((a,b)=>a-b)
    const result = []

    const iter = 
      (i, res, sumArray)=>{
        while(i< candidates.length && candidates[i]<= res) {
          if (candidates[i] === res) result.push([...sumArray, candidates[i]])
          iter(i, res-candidates[i], [...sumArray, candidates[i]])
          i++
        }
      }
    
    iter(0, target, [])
    return result
  }