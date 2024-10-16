/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const numMap: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    const complement = target - currentNum;

    if (complement in numMap) {
      return [numMap[complement], i];
    }

    numMap[currentNum] = i;
  }

  throw new Error("No solution found");
}
// @lc code=end
