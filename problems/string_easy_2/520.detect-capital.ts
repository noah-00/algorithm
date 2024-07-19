/*
 * @lc app=leetcode id=520 lang=typescript
 *
 * [520] Detect Capital
 */

// @lc code=start
function detectCapitalUse(word: string): boolean {
  const allUppercase = /^[A-Z]+$/;
  const allLowercase = /^[a-z]+$/;
  const titleCase = /^[A-Z][a-z]*$/;

  return allUppercase.test(word) || allLowercase.test(word) || titleCase.test(word);
}
// @lc code=end
