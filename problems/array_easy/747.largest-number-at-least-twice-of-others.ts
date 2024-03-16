/*
 * @lc app=leetcode id=747 lang=typescript
 *
 * [747] Largest Number At Least Twice of Others
 */

// @lc code=start
function dominantIndex(nums: number[]): number {
  const orderNums = [...nums].sort((a, b) => a - b);
  let value = 0;

  if (orderNums[orderNums.length - 1] >= orderNums[orderNums.length - 2] * 2)
    value = orderNums[orderNums.length - 1];

  return value ? nums.findIndex((v) => value == v) : -1;
}
// @lc code=end
