/*
 * @lc app=leetcode id=628 lang=typescript
 *
 * [628] Maximum Product of Three Numbers
 */

// @lc code=start
function maximumProduct(nums: number[]): number {
  const s = nums.sort((a, b) => a - b);
  return Math.max(
    s[s.length - 1] * s[s.length - 2] * s[s.length - 3],
    s[0] * s[1] * s[s.length - 1]
  );
}
// @lc code=end
