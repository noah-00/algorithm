/*
 * @lc app=leetcode id=961 lang=typescript
 *
 * [961] N-Repeated Element in Size 2N Array
 */

// @lc code=start
function repeatedNTimes(nums: number[]): number {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return nums[i];
    } else {
      set.add(nums[i]);
    }
  }
}
// @lc code=end
