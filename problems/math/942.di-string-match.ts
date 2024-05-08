/*
 * @lc app=leetcode id=942 lang=typescript
 *
 * [942] DI String Match
 */

// @lc code=start
function diStringMatch(s: string): number[] {
  let dLength = s.length;
  let iLength = 0;
  const arr = [];

  for (let i = 0; i < s.length + 1; i++) {
    if (s[i] == "D") {
      arr.push(dLength--);
    } else if (s[i] == "I") {
      arr.push(iLength++);
    }
  }
  arr.push(dLength);
  return arr;
}
// @lc code=end
