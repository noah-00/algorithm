/*
 * @lc app=leetcode id=441 lang=typescript
 *
 * [441] Arranging Coins
 */

// @lc code=start
function arrangeCoins(n: number): number {
  let count: number = 0;
  for (let i = 1; i <= n; i++) {
    if (n - i >= 0) {
      n -= i;
      count++;
    } else return count;
  }
  return count;
}
// @lc code=end
