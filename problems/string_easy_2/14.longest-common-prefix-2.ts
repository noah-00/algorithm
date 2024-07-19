/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  // The sort method is used to efficiently find the smallest and largest strings in lexicographical order, which allows determining the longest common prefix by comparing only these two.
  const sorted = strs.sort((a, b) => (a < b ? -1 : 1));

  const output: string[] = [];
  const firstword = sorted[0];
  const lastword = sorted[sorted.length - 1];

  for (let i = 0; i < firstword.length; i++) {
    // Compare each letter of the first word with each letter of the last word one by one.
    if (firstword[i] == lastword[i]) {
      output.push(firstword[i]);
    } else {
      break;
    }
  }

  return output.join("");
}
// @lc code=end
