/*
 * @lc app=leetcode id=796 lang=typescript
 *
 * [796] Rotate String
 */

// @lc code=start
function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false;
  const length: number = s.length;
  for (let i = 0; i < length; i++) {
    s = s.slice(1) + s[0];
    if (s === goal) return true;
  }
  return false;
}
// @lc code=end
