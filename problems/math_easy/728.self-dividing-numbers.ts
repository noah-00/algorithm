/*
 * @lc app=leetcode id=728 lang=typescript
 *
 * [728] Self Dividing Numbers
 */

// @lc code=start
function selfDividingNumbers(left: number, right: number): number[] {
  const result: number[] = [];
  const parseNum = (num: number) => {
    const copyNum = num;

    while (num > 0) {
      if (copyNum % (num % 10) !== 0) {
        return false;
      }

      num = Math.floor(num / 10);
    }

    return true;
  };

  while (left <= right) {
    const isFit = parseNum(left);

    if (isFit) {
      result.push(left);
    }

    left++;
  }

  return result;
}
// @lc code=end
