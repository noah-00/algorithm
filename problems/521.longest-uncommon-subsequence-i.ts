/*
 * @lc app=leetcode id=521 lang=typescript
 *
 * [521] Longest Uncommon Subsequence I
 */

// @lc code=start
const findLUSlength = (a: string, b: string): number =>
  a === b ? -1 : Math.max(a.length, b.length);
// @lc code=end
