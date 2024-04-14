/*
 * @lc app=leetcode id=771 lang=typescript
 *
 * [771] Jewels and Stones
 */

// @lc code=start
function numJewelsInStones(jewels: string, stones: string): number {
  const set = new Set([...jewels]);
  let count = 0;
  for (const stone of [...stones]) {
    if (set.has(stone)) count++;
  }
  return count;
}
// @lc code=end
