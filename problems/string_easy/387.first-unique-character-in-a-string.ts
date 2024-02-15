/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
function firstUniqChar(s: string): number {
  for (let i = 0; i < s.length; i++) {
    const targetChar = s.substring(i, i + 1);

    const firstPart = s.substring(0, i);
    const secondPart = s.substring(i + 1, s.length);
    const otherCharts = firstPart + secondPart;

    if (otherCharts.indexOf(targetChar) === -1) {
      return i;
    }
  }

  return -1;
}
// @lc code=end
