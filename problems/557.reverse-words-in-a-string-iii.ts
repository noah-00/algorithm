/*
 * @lc app=leetcode id=557 lang=typescript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
function reverseWords(s: string): string {
  const words = s.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("");
  }
  return words.join(" ");
}
// @lc code=end
