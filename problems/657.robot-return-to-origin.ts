/*
 * @lc app=leetcode id=657 lang=typescript
 *
 * [657] Robot Return to Origin
 */

// @lc code=start
function judgeCircle(moves: string): boolean {
  const position = {
    y: 0,
    x: 0
  };

  const setPosition = {
    U: () => (position.y += 1),
    D: () => (position.y += -1),
    R: () => (position.x += 1),
    L: () => (position.x += -1)
  };

  for (let i = 0; i < moves.length; i++) {
    setPosition[moves[i]]();
  }

  return position.x === 0 && position.y === 0;
}
// @lc code=end
