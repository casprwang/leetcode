/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m,n)=>{
  const grid = new Array(m).fill().map(_=>new Array(n).fill(0))
  for (let i  = 0 ; i< m; i++){
    for (let j = 0; j<n ; j++){
      if(j===0 || i ===0) grid[i][j]=1
      else {
        grid[i][j]= grid[i-1][j] + grid [i][j-1]
      }
    }
  }
  return grid[m-1][n-1]
}