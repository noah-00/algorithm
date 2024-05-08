/*
 * @lc app=leetcode id=258 lang=typescript
 *
 * [258] Add Digits
 */

// @lc code=start
function addDigits(num: number): number {
  if (num < 10) {
    return num;
  }
  return addDigits(
    String(num)
      .split("")
      .map(Number)
      .reduce((a, b) => a + b)
  );
}
// @lc code=end
