// var exist = function (board, word) {
//   let row = board.length;
//   let col = board[0].length;

//   function validate(r, c, ind = 0) {
//     if (board[r][c] !== word[ind]) return false;
//     if (ind === word.length - 1) return true;
//     console.log(board[r][c]);

//     board[r][c] = "*"; // mark as visited

//     if (r > 0) {
//       if (validate(r - 1, c, ind+1)) return true;
//     }
//     if (c > 0) {
//       if (validate(r, c - 1, ind+1)) return true;
//     }
//     if (r < row - 1) {
//       if (validate(r + 1, c, ind+1)) return true;
//     }
//     if (c < col - 1) {
//       if (validate(r, c + 1, ind+1)) return true;
//     }

//     board[r][c] = word[ind]; // mark as visited
//     return false;
//   }

//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       if (validate(i, j)) return true;
//     }
//   }
//   return false;
// };

var exist = function (board, word) {
  let row = board.length;
  let col = board[0].length;
  let result = false;

  function validate(r, c, ind = 0) {
    if (board[r][c] === word[ind]) {
      board[r][c] = "*";
      if (r > 0) validate(r - 1, c, ind + 1);
      if (c > 0) validate(r, c - 1, ind + 1);
      if (r < row - 1) validate(r + 1, c, ind + 1);
      if (c < col - 1) validate(r, c + 1, ind + 1);
    }
    if (ind === word.length) result = true;
    return;
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      validate(i, j);
      if (result) return true;
    }
  }
  return result;
};

console.log(
  exist(
    [
      ["A", "A", "A", "A", "A", "A"],
      ["A", "A", "A", "A", "A", "A"],
      ["A", "A", "A", "A", "A", "A"],
      ["A", "A", "A", "A", "A", "A"],
      ["A", "A", "A", "A", "A", "A"],
      ["A", "A", "A", "A", "A", "A"],
    ],
    "AAAAAAAAAAAABAA"
  )
);

const array = new Array(4).fill(false);
console.log(array);
