/*
 * @lc app=leetcode id=645 lang=typescript
 *
 * [645] Set Mismatch
 */

// @lc code=start
function findErrorNums(nums: number[]): number[] {
  let repeat = -1,
    missing = -1;
  const storage = new Array(nums.length + 1).fill(0);

  for (const num of nums) storage[num]++;

  for (let index = 1; index < storage.length; index++)
    if (storage[index] == 0) missing = index;
    else if (storage[index] > 1) repeat = index;

  return [repeat, missing];
}
// @lc code=end
