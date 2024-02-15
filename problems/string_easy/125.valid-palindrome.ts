/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  if (s.trim() === "") {
    return true;
  }

  let str = "";

  const lowerString = s.toLowerCase();

  for (let i = 0; i <= lowerString.length - 1; i++) {
    if (
      (lowerString[i] >= "a" && lowerString[i] <= "z") ||
      (lowerString[i] >= "0" && lowerString[i] <= "9")
    ) {
      str += lowerString[i];
    }
  }

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
}
// @lc code=end
