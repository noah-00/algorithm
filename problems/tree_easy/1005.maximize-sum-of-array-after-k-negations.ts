/*
 * @lc app=leetcode id=1005 lang=typescript
 *
 * [1005] Maximize Sum Of Array After K Negations
 */

// @lc code=start
function largestSumAfterKNegations(nums: number[], k: number): number {
  const arr = nums.sort((a, b) => a - b);
  let index = 0;
  while (k != 0) {
    arr[index] *= -1;
    if (arr[index] > arr[index + 1]) {
      index += 1;
    }
    k -= 1;
  }
  return arr.reduce((prev, curr) => prev + curr, 0);
}
// @lc code=end
