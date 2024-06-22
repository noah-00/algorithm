/*
 * @lc app=leetcode id=520 lang=typescript
 *
 * [520] Detect Capital
 */

// @lc code=start
function detectCapitalUse(word: string): boolean {
  // Check if the word is all uppercase, all lowercase, or title case
  const allUppercase = /^[A-Z]+$/;
  // Check if the word is all lowercase
  const allLowercase = /^[a-z]+$/;
  // Check if the word is title case (e.g. "Leetcode")
  const titleCase = /^[A-Z][a-z]*$/;

  return allUppercase.test(word) || allLowercase.test(word) || titleCase.test(word);
}
// @lc code=end
