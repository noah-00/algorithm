/*
 * @lc app=leetcode id=541 lang=typescript
 *
 * [541] Reverse String II
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
  if (k === 1) return s;
  let ans = "",
    c = "",
    index = 0,
    reverse = true;
  for (let i = 0; i < s.length; i++) {
    if (index === k) {
      index = 0;
      reverse = !reverse;
      ans += c;
      c = "";
    }
    if (reverse) c = s[i] + c;
    else c += s[i];
    index++;
  }
  ans += c;
  return ans;
}
// @lc code=end
