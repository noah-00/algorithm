/*
 * @lc app=leetcode id=830 lang=typescript
 *
 * [830] Positions of Large Groups
 */

// @lc code=start
function largeGroupPositions(s: string): number[][] {
  if (!s.length) return [];

  const res: number[][] = [];

  let currentChar = s[0];
  let startPos = 0;

  for (let i = 1; i < s.length + 1; i++) {
    if (s[i] === currentChar) continue;

    if (i - startPos >= 3) res.push([startPos, i - 1]);

    currentChar = s[i];
    startPos = i;
  }

  return res;
}
// @lc code=end
