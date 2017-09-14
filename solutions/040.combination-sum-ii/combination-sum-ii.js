/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const combinationSum2 = (
  candidates,
  target,
  result=new Set()
) => {
  candidates.sort()
  const iter = (temp,target,pos) => {
    if(target< 0) return
    if(target ===0) result.add(JSON.stringify([...temp]))
    else {
      for (let i=pos; i<candidates.length; i++ ){
        iter([...temp, candidates[i]], target-candidates[i], i+1)
      }
    }
  }

  iter([],target,0)
  return [...result ].map(JSON.parse)
};