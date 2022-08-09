// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

function numIsland(grid) {
  const row = grid.length;
  const col = grid[0].length;

  let count = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "1") {
        count++;
        traverse(grid, i, j);
      }
    }
  }

  function traverse(grid, row, col) {
    if (grid[row][col] === "0") return;
    if (grid[row][col] === "1") {
      grid[row][col] = "0";
    }

    if (row > 0) traverse(grid, row - 1, col);
    if (col > 0) traverse(grid, row, col - 1);
    if (row < grid.length - 1) traverse(grid, row + 1, col);
    if (col < grid[0].length - 1) traverse(grid, row, col + 1);
  }

  return count;
}

console.log(
  numIsland([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
