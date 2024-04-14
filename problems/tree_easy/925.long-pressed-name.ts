/*
 * @lc app=leetcode id=925 lang=typescript
 *
 * [925] Long Pressed Name
 */

// @lc code=start
function isLongPressedName(name: string, typed: string): boolean {
  const N = name.length;
  const M = typed.length;

  if (N > M) {
    return false;
  }

  let i = 0;
  let prev = "";
  for (let j = 0; j < M; ++j) {
    if (i < N && name[i] === typed[j]) {
      prev = name[i++];
    } else if (prev !== typed[j]) {
      return false;
    }
  }

  return i >= N;
}
// @lc code=end
