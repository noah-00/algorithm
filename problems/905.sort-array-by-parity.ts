/*
 * @lc app=leetcode id=905 lang=typescript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
function sortArrayByParity(nums: number[]): number[] {
  const even: number[] = [],
    odd: number[] = [];
  for (const num of nums) {
    if (num % 2 === 0) even.push(num);
    else odd.push(num);
  }

  return [...even, ...odd];
}
// @lc code=end
