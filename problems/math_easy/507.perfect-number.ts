/*
 * @lc app=leetcode id=507 lang=typescript
 *
 * [507] Perfect Number
 */

// @lc code=start
function checkPerfectNumber(num: number): boolean {
  if (num == 1) {
    return false;
  }
  let n = 1;
  for (let s = 2; s < num; s++) {
    if (num % s == 0) {
      n += s;
    }
  }
  return n == num;
}
// @lc code=end
