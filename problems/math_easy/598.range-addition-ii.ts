/*
 * @lc app=leetcode id=598 lang=typescript
 *
 * [598] Range Addition II
 */

// @lc code=start
function maxCount(m: number, n: number, ops: number[][]): number {
  if (ops.length == 0) return m * n;

  let minM = m;
  let minN = n;
  for (const op of ops) {
    minM = Math.min(op[0], minM);
    minN = Math.min(op[1], minN);
  }
  return minM * minN;
}
// @lc code=end
