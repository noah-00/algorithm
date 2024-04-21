/*
 * @lc app=leetcode id=326 lang=typescript
 *
 * [326] Power of Three
 */

// @lc code=start
function isPowerOfThree(n: number): boolean {
  if (n === 0) return false;
  if (n === 1) return true;
  if (n % 3 === 0) return isPowerOfThree(n / 3);
  return false;
}
// @lc code=end
