/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let j = 0;
  for (const n of nums) if (n !== val) nums[j++] = n;
  return j;
}
// @lc code=end
