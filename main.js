const knightMoves = require('./knightMoves.js');

const start = [0, 0];
const end = [7, 7];

const path = knightMoves(start, end);

console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
path.forEach(pos => console.log(pos));
