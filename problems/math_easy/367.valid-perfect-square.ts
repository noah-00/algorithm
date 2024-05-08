/*
 * @lc app=leetcode id=367 lang=typescript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
  return !String(num ** 0.5).includes(".");
}
// @lc code=end
