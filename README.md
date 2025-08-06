# Knights-Travails-
Find the shortest path a knight can take on a standard 8x8 chessboard using Breadth-First Search (BFS).

## How It Works

   . Each square on the board is a node.

   . A knight’s valid moves from a square are the edges.

   . The board is treated as an implicit graph.

   . BFS is used to find the shortest path between two nodes.


### Run the Program

    No setup needed — just run it with Node:

    node main.js

    You'll see output like:

    You made it in 6 moves! Here's your path:
    [0, 0]
    [2, 1]
    [4, 2]
    [6, 3]
    [7, 5]
    [5, 6]
    [7, 7]

### Example Input

You can change the coordinates in main.js:

const start = [0, 0];
const end = [7, 7];

#### Concepts Used

   . Breadth-First Search (BFS)

   . Graph traversal

   . Queue

   . Coordinate mapping

    Reconstructing path using parent map
    