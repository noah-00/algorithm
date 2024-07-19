/*
 * @lc app=leetcode id=459 lang=typescript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
function repeatedSubstringPattern(s: string): boolean {
  const n = s.length;

  for (let len = 1; len <= n / 2; len++) {
    if (n % len === 0) {
      const repeatedSubstring = s.slice(0, len);
      let formedString = "";

      for (let i = 0; i < n / len; i++) {
        formedString += repeatedSubstring;
      }

      if (formedString === s) {
        return true;
      }
    }
  }

  return false;
}
// @lc code=end
