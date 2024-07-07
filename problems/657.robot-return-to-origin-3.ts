/*
 * @lc app=leetcode id=657 lang=typescript
 *
 * [657] Robot Return to Origin
 */

// @lc code=start
function judgeCircle(moves: string): boolean {
  let x: number = 0;
  let y: number = 0;

  const actions = {
    R: () => (x += 1),
    L: () => (x -= 1),
    U: () => (y += 1),
    D: () => (y -= 1)
  };

  for (let i = 0; i < moves.length; i++) {
    actions[moves[i]];
  }

  return x === 0 && y == 0;
}
// @lc code=end
