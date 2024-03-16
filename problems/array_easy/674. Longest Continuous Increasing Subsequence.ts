/*
 * @lc app=leetcode id=643 lang=typescript
 *
 * [674] Longest Continuous Increasing Subsequence
 */

// @lc code=start
function findLengthOfLCIS(nums: number[]): number {
  let longest = 1,
    length = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) longest = Math.max(longest, ++length);
    else length = 1;
  }

  return longest;
}
