const boardSize = 8;

const knightOffsets = [
  [2, 1], [1, 2], [-1, 2], [-2, 1],
  [-2, -1], [-1, -2], [1, -2], [2, -1]
];

function isValid(x, y) {
  return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
}

module.exports = { boardSize, knightOffsets, isValid };
