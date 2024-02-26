/*
 * @lc app=leetcode id=268 lang=typescript
 *
 * [268] Missing Number
 */

// @lc code=start
function missingNumber(nums: number[]): number {
  const set = new Set(nums);

  for (let i = 0; i < set.size + 1; i++) {
    if (!set.has(i)) return i;
  }
}
// @lc code=end
