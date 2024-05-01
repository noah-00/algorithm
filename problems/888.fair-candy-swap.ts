/*
 * @lc app=leetcode id=888 lang=typescript
 *
 * [888] Fair Candy Swap
 */

// @lc code=start
function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
  const sumA = aliceSizes.reduce((acc, num) => acc + num, 0);
  const sumB = bobSizes.reduce((acc, num) => acc + num, 0);
  const diff = sumA - sumB;
  const answer = [0, 0];

  for (const num1 of aliceSizes) {
    for (const num2 of bobSizes) {
      if (num1 - num2 === diff / 2) {
        answer[0] = num1;
        answer[1] = num2;
        // console.log(`Swap ${num1} from aliceSizes with ${num2} from bobSizes.`);
      }
    }
  }

  //console.log(sumA, sumB, diff);
  return answer;
}
// @lc code=end
