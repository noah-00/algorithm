/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// nums = [2, 7, 11, 15];
// target = 9

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const numMap: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    const complement = target - currentNum;
    // 7
    // 2

    if (complement in numMap) {
      return [numMap[complement], i];
      // [0, 1]
    }

    numMap[currentNum] = i;
    // { 2: 0 }
  }

  throw new Error("No solution found");
}
// @lc code=end
