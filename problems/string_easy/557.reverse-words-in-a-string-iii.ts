/*
 * @lc app=leetcode id=557 lang=typescript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
function reverseWords(s: string) {
  const arr = s.split(" ");
  return arr.map((s: string) => Array.from(s).reverse().join("")).join(" ");
}
// @lc code=end
