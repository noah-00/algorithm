/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let p = 0;
  nums.forEach((n) => n > nums[p] && (nums[++p] = n));
  return p + 1;
}
// @lc code=end
