/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  const romaMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romaMap[s[i]];
    const next = romaMap[s[i + 1]];

    if (current && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
}
// @lc code=end
