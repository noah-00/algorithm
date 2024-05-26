/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  return s
    .split(" ")
    .reverse()
    .find((splittedStr: string) => splittedStr.length >= 1)!.length;
}
// @lc code=end
