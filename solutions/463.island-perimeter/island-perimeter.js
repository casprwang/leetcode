/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = grid => {
  let islandCount = 0
  let neibourCount = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        islandCount++
        if (i < grid.length - 1 && grid[i + 1][j]) neibourCount++
        if (j < grid[0].length - 1 && grid[i][j + 1]) neibourCount++
      }
    }
  }

  return islandCount * 4 - neibourCount * 2
}
