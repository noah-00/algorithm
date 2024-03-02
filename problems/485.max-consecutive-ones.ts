/*
 * @lc app=leetcode id=485 lang=typescript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
function findMaxConsecutiveOnes(nums: number[]): number {
  const counts: number[] = [0];
  let idx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) counts[idx]++;
    else {
      counts.push(0);
      idx++;
    }
  }

  return Math.max(...counts);
}
// @lc code=end
