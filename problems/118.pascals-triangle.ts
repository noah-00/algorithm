/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
  const numbers: number[][] = [[1]];
  if (numRows === 1) return numbers;
  for (let row = 1; row < numRows; row++) {
    const values: number[] = [];
    for (let index = 0; index < row + 1; index++) {
      values.push((numbers[row - 1][index - 1] ?? 0) + (numbers[row - 1][index] ?? 0));
    }
    numbers.push(values);
  }
  return numbers;
}
// @lc code=end
