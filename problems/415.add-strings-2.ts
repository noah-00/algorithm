/*
 * @lc app=leetcode id=415 lang=typescript
 *
 * [415] Add Strings
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  return (BigInt(num1) + BigInt(num2)).toString();
}
// @lc code=end
