/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let index = 0;
  if (target === 0 && target < nums[0]) return (index = 0);

  nums.forEach((e: number, i: number) => {
    if (target > e) {
      index = i + 1;
    }
    if (target === e) index = i;
  });

  return index;
}

// @lc code=end
