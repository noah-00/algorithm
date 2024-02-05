/*
 * @lc app=leetcode id=520 lang=typescript
 *
 * [520] Detect Capital
 */

// @lc code=start
function detectCapitalUse(word: string): boolean {
  return (
    word.toUpperCase() === word ||
    word.toLowerCase() === word ||
    word.slice(1).toLowerCase() === word.slice(1)
  );
}
// @lc code=end
