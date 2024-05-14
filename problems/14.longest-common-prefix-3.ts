/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  const sorted = strs.sort((a, b) => (a < b ? -1 : 1));

  const firstword = sorted[0];
  const lastword = sorted[sorted.length - 1];
  const output: string[] = [];

  for (let i = 0; i < firstword.length; i++) {
    if (firstword[i] === lastword[i]) {
      output.push(firstword[i]);
    } else {
      break;
    }

    return output.join("");
  }
}
// @lc code=end
