/*
 * @lc app=leetcode id=944 lang=typescript
 *
 * [944] Delete Columns to Make Sorted
 */

// @lc code=start
function minDeletionSize(strs: string[]): number {
  let result = 0;

  if (strs.length === 0) {
    return result;
  }

  const rowLength = strs[0].length;

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j].charCodeAt(i) > strs[j + 1].charCodeAt(i)) {
        result++;
        break;
      }
    }
  }

  return result;
}
// @lc code=end
