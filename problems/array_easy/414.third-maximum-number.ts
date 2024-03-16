/*
 * @lc app=leetcode id=414 lang=typescript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
function thirdMax(nums: number[]): number {
  return [...new Set(nums)].length < 3
    ? [...new Set(nums)].sort((a, b) => b - a)[0]
    : [...new Set(nums)].sort((a, b) => b - a)[2];
}
// @lc code=end
