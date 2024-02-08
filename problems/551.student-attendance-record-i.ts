/*
 * @lc app=leetcode id=551 lang=typescript
 *
 * [551] Student Attendance Record I
 */

// @lc code=start
function checkRecord(s: string): boolean {
  let late = 0,
    absent = 0;
  for (const c of s) {
    if (c !== "L") late = 0;
    if (c === "A" && ++absent > 1) return false;
    if (c === "L" && ++late >= 3) return false;
  }

  return true;
}
// @lc code=end
