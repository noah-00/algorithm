/*
 * @lc app=leetcode id=1018 lang=typescript
 *
 * [1018] Binary Prefix Divisible By 5
 */

// @lc code=start
function prefixesDivBy5(nums: number[]): boolean[] {
  const res: boolean[] = [];
  let binary = 0;
  for (const num of nums) {
    binary = (binary % 5) * 2 + num;
    const checkBinary = binary % 5 === 0;
    res.push(checkBinary);
  }
  return res;
}
// @lc code=end
