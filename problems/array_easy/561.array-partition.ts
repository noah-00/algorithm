/*
 * @lc app=leetcode id=561 lang=typescript
 *
 * [561] Array Partition
 */

// @lc code=start
function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let result = 0;
  for (let i = 0; i < nums.length; i += 2) {
    result += nums[i];
    え;
  }

  return result;
}
// @lc code=end
