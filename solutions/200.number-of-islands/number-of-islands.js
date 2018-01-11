/**
 * @param {character[][]} grid
 * @return {number}
 */
// const numIslands = grid => {
//   // bfs
//   if (grid.length === 0) return 0
//   let m = grid.length
//   let n = grid[0].length
//   let res = 0

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (grid[i][j] === '1') {
//         bfs(i, j)
//         res++
//       }
//     }
//   }

//   function bfs(i, j) {
//     grid[i][j] = '0'

//     if ( i< m-1 && grid[i + 1][j] === '1') {
//       bfs(i + 1, j)
//     }
//     if ( j < n -1 &&grid[i][j + 1] === '1') {
//       bfs(i, j + 1)
//     }
//     if (j>0 && grid[i][j-1] === '1') {
//       bfs(i, j - 1)
//     }
//     if (i>0 && grid[i-1][j] === '1') {
//       bfs(i-1, j)
//     }
//   }

//   return res
// }

/**
 * @param {character[][]} grid
 * @return {number}
 */
// const numIslands = grid => {
//   // bfs
//   if (grid.length === 0) return 0
//   let m = grid.length
//   let n = grid[0].length
//   let res = 0

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (grid[i][j] === '1') {
//         bfs(i, j)
//         res++
//       }
//     }
//   }

//   function bfs(i, j) {
//     if(i<0 || j<0 || i>=m || j>=n) return
//     if(grid[i][j] ==='0') return

//     grid[i][j] = '0'
//     bfs(i + 1, j)
//     bfs(i, j + 1)
//     bfs(i, j - 1)
//     bfs(i-1, j)
//   }

//   return res
// }

const numIslands = grid => {
  let count = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        walk(grid, i, j)
        count++
      }
    }
  }

  return count
}


const walk = (grid, i, j) => {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') return
  grid[i][j] = '0'

  walk(grid, i + 1, j)
  walk(grid, i, j + 1)
  walk(grid, i - 1, j)
  walk(grid, i, j - 1)
}