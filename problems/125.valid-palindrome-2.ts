/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  const cleanStr: string = s
    .split(" ") // make it an array of words
    .join("") // join the words into a single string
    .replace(/[^a-zA-Z0-9]/g, "") // remove all non-alphanumeric characters
    .toLowerCase(); // make it all lowercase

  const reversed: string = cleanStr.split("").reverse().join("").toLowerCase(); // reverse the string
  return cleanStr === reversed; // compare the original and reversed strings
}
// @lc code=end
