/*
 * @lc app=leetcode id=557 lang=typescript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
function reverseWords(s: string): string {
  return s
    .split(" ")
    .map((item) => item.split("").reverse().join(""))
    .join(" ");
}
// @lc code=end
