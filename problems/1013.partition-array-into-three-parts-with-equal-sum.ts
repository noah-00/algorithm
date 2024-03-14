/*
 * @lc app=leetcode id=1013 lang=typescript
 *
 * [1013] Partition Array Into Three Parts With Equal Sum
 */

// @lc code=start
function canThreePartsEqualSum(arr: number[]): boolean {
  const sum = arr.reduce((acc, cur) => acc + cur);
  if (sum % 3 !== 0) return false;

  const res: boolean[] = [];
  let current: number = 0;
  for (let i = 0; i < arr.length; i++) {
    current += arr[i];
    if (current === sum / 3) {
      current = 0;
      res.push(true);
    }
  }

  if (res.length >= 3) return true;
  return false;
}
// @lc code=end

// TODO: review
