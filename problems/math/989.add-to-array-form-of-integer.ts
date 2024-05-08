/*
 * @lc app=leetcode id=989 lang=typescript
 *
 * [989] Add to Array-Form of Integer
 */

// @lc code=start
function addToArrayForm(num: number[], k: number): number[] {
  const result: number[] = [];
  let carry = 0;
  let i = num.length - 1;
  while (i >= 0 || k > 0) {
    let sum = carry;
    if (i >= 0) {
      sum += num[i];
      i--;
    }
    if (k > 0) {
      sum += k % 10;
      k = Math.floor(k / 10);
    }
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
  }
  if (carry > 0) {
    result.push(carry);
  }

  return result.reverse();
}
// @lc code=end
