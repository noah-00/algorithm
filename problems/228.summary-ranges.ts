/*
 * @lc app=leetcode id=228 lang=typescript
 *
 * [228] Summary Ranges
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
  const result = [];
  let tmpNums = [];

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const nextNum = nums[i + 1];

    tmpNums.push(currentNum);

    if (nextNum !== currentNum + 1 && tmpNums.length === 1) {
      result.push(`${tmpNums[0]}`);
      tmpNums = [];
    } else if (nextNum !== currentNum + 1) {
      result.push(`${tmpNums[0]}->${tmpNums[tmpNums.length - 1]}`);
      tmpNums = [];
    }
  }

  return result;
}
// @lc code=end
