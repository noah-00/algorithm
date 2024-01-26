/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  const words = s.trimEnd().split(" ");
  const lastWord = words[words.length - 1];
  return lastWord.length;
}
// @lc code=end
