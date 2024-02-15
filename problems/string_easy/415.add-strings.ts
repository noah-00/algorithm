/*
 * @lc app=leetcode id=415 lang=typescript
 *
 * [415] Add Strings
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? parseInt(num1.charAt(i), 10) : 0;
    const digit2 = j >= 0 ? parseInt(num2.charAt(j), 10) : 0;

    const sum = digit1 + digit2 + carry;
    result = String(sum % 10) + result;

    carry = Math.floor(sum / 10);
    i--;
    j--;
  }

  return result;
}
// @lc code=end
