/*
 * @lc app=leetcode id=961 lang=typescript
 *
 * [961] N-Repeated Element in Size 2N Array
 */

// @lc code=start
function repeatedNTimes(nums: number[]): number {
  return nums.filter((e) => nums.indexOf(e) !== nums.lastIndexOf(e))[0];
}
// @lc code=end
