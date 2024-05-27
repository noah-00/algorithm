/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  const cleanStr: string = s
    .split(" ")
    .join("")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  const reversed: string = cleanStr.split("").reverse().join("").toLowerCase();
  return cleanStr === reversed;
}
// @lc code=end
