/*
 * @lc app=leetcode id=448 lang=typescript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {
  const set = new Set(nums);
  const result = [];

  for (let i = 1; i < nums.length + 1; i++) {
    if (!set.has(i)) result.push(i);
  }

  return result;
}
// @lc code=end
