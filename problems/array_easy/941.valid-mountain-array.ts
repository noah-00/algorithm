/*
 * @lc app=leetcode id=941 lang=typescript
 *
 * [941] Valid Mountain Array
 */

// @lc code=start
function validMountainArray(arr: number[]): boolean {
  if (arr.length < 3) return false;

  let i = 0;
  while (arr[i] < arr[i + 1] && i < arr.length) {
    i++;
  }

  if (i === 0 || i + 1 === arr.length) return false;

  while (arr[i] > arr[i + 1] && i < arr.length) {
    i++;
  }

  return i + 1 === arr.length;
}
// @lc code=end

// TODO: understand it in detail
