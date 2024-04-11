/*
 * @lc app=leetcode id=1021 lang=typescript
 *
 * [1021] Remove Outermost Parentheses
 */

// @lc code=start
function removeOuterParentheses(s: string): string {
  let level = 0;
  let built: string = "";
  for (const c of s) {
    if (c === "(" && level++ === 0) continue;
    if (c === ")" && level-- === 1) continue;
    built += c;
  }
  return built;
}
// @lc code=end
