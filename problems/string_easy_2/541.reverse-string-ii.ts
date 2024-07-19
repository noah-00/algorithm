/*
 * @lc app=leetcode id=541 lang=typescript
 *
 * [541] Reverse String II
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
  const t = [...s];

  for (let i = 0; i < t.length; i += 2 * k) {
    const toReverse = t.slice(i, i + k);
    for (let j = 0; j < k; j++) {
      t[i + j] = toReverse[k - j - 1];
    }
  }

  return t.join("");
}
// @lc code=end
