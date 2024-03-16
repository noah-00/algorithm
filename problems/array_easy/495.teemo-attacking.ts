/*
 * @lc app=leetcode id=495 lang=typescript
 *
 * [495] Teemo Attacking
 */

// @lc code=start
function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let count = 0;

  for (let i = 1; i < timeSeries.length; i++)
    count += Math.min(timeSeries[i] - timeSeries[i - 1], duration);

  return count + duration;
}
// @lc code=end
