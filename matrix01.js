// LeetCode 542. 01 Matrix
// Medium

// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
// The distance between two adjacent cells is 1.

// Example 1:
// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]

// Example 2:
// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]

// Constraints:
// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 104
// 1 <= m * n <= 104
// mat[i][j] is either 0 or 1.
// There is at least one 0 in mat.

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
// var updateMatrix = function (mat) {
//   let row = mat.length;
//   let col = mat[0].length;
//   const result = [];

//   for (let i = 0; i < row; i++) {
//     const finalRow = [];
//     for (let j = 0; j < col; j++) {
//       finalRow.push(update(mat, i, j));
//     }
//     result.push(finalRow);
//   }

//   function update(matrix, r, c, dist = 0) {
//     if (matrix[r][c] === 0) {
//       return dist;
//     }

//     if (r > 0) return update(matrix, r - 1, c, ++dist);
//     if (c < matrix[0].length) return update(matrix, r, c + 1, ++dist);
//     if (c > 0) return update(matrix, r, c - 1, ++dist);
//     if (r < matrix.length) return update(matrix, r + 1, c, ++dist);
//   }

//   return result;
// };

var updateMatrix = function (mat) {
  let row = mat.length;
  let col = mat[0].length;
  const queue = [];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j, 0]);
      } else {
        mat[i][j] = Infinity;
      }
    }
  }

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length) {
    const [row, col, path] = queue.shift();

    mat[row][col] = Math.min(mat[row][col], path);
    for (const [dx, dy] of directions) {
      const x = row + dx;
      const y = col + dy;

      if (x < 0 || x >= mat.length) continue;
      if (y < 0 || y >= mat[0].length) continue;
      if (mat[x][y] !== Infinity) continue;

      queue.push([x, y, path + 1]);
    }
  }

  return mat;
};

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);

console.table(
  updateMatrix([
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ])
);
