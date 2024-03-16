/*
 * @lc app=leetcode id=643 lang=typescript
 *
 * [697] Degree-of-an-array
 */

// @lc code=start
function findShortestSubArray(nums: number[]): number {
  let minDegree = nums.length;
  const obj = {};
  let maxFreq = 0;
  const d = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    obj[num] = ++obj[num] || 1;
    maxFreq = Math.max(obj[num], maxFreq);

    if (num in d) {
      d[num] = [d[num][0], i];
    } else {
      d[num] = [i, 0];
    }
  }

  for (const key in obj) {
    if (obj[key] === maxFreq) {
      minDegree = Math.min(minDegree, 1 + Math.abs(d[key][1] - d[key][0]));
    }
  }

  return minDegree;
}
