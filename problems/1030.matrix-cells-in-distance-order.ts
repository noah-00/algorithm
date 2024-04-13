/*
 * @lc app=leetcode id=1030 lang=typescript
 *
 * [1030] Matrix Cells in Distance Order
 */

// @lc code=start
function allCellsDistOrder(
  rows: number,
  cols: number,
  rCenter: number,
  cCenter: number
): number[][] {
  const getSeenKey = (i, j) => `${i}-${j}`;
  const seen = new Set<string>([getSeenKey(rCenter, cCenter)]);
  const cellsByDistance = [];

  const nextMoves = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];
  function inRange(i, j) {
    return i >= 0 && j >= 0 && j < cols && i < rows;
  }

  let currentCells = [[rCenter, cCenter]];
  let nextCells = [];
  while (currentCells.length) {
    const currentCell = currentCells.shift();
    const [i, j] = currentCell;
    cellsByDistance.push(currentCell);
    const validAdjacentCells = nextMoves
      .map(([x, y]) => [x + i, y + j])
      .filter(([newI, newJ]) => inRange(newI, newJ) && !seen.has(getSeenKey(newI, newJ)));
    validAdjacentCells.forEach(([x, y]) => seen.add(getSeenKey(x, y)));
    nextCells = nextCells.concat(validAdjacentCells);
    if (!currentCells.length) {
      currentCells = [...nextCells];
      nextCells = [];
    }
  }

  return cellsByDistance;
}
// @lc code=end
