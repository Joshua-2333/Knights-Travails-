const { knightOffsets, isValid } = require('./utils.js');

function knightMoves(start, end) {
  const queue = [];
  const visited = new Set();
  const parentMap = new Map();

  const startKey = start.join(',');
  queue.push(start);
  visited.add(startKey);
  parentMap.set(startKey, null);

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    const currentKey = [x, y].join(',');

    if (x === end[0] && y === end[1]) break;

    for (let [dx, dy] of knightOffsets) {
      const newX = x + dx;
      const newY = y + dy;
      const nextKey = [newX, newY].join(',');

      if (isValid(newX, newY) && !visited.has(nextKey)) {
        queue.push([newX, newY]);
        visited.add(nextKey);
        parentMap.set(nextKey, currentKey);
      }
    }
  }

  const path = [];
  let current = end.join(',');
  while (current !== null) {
    const [x, y] = current.split(',').map(Number);
    path.unshift([x, y]);
    current = parentMap.get(current);
  }

  return path;
}

module.exports = knightMoves;
