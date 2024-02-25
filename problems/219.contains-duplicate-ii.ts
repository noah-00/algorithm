/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const myMap = new Map();

  for (let i = 0; i < nums.length; ++i) {
    if (myMap.has(nums[i]) && Math.abs(myMap.get(nums[i]) - i) <= k) {
      return true;
    } else {
      myMap.set(nums[i], i);
    }
  }

  return false;
}
// @lc code=end
