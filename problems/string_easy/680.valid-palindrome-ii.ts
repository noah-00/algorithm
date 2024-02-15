/*
 * @lc app=leetcode id=680 lang=typescript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
function validPalindrome(s: string): boolean {
  let i = 0;
  let j = s.length - 1;

  let deletionCount = 0;

  while (i < j) {
    if (s[i] !== s[j]) {
      const rightEqual = s[i] == s[j - 1];
      const leftEqual = s[i + 1] == s[j];
      if (!leftEqual && !rightEqual) {
        return false;
      }
      if (leftEqual && !rightEqual) {
        deletionCount++;
        i++;
      }
      if (rightEqual && !leftEqual) {
        deletionCount++;
        j--;
      }
    }

    if (deletionCount > 1) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}
// @lc code=end
