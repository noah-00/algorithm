/*
 * @lc app=leetcode id=551 lang=typescript
 *
 * [551] Student Attendance Record I
 */

// @lc code=start
function checkRecord(s: string): boolean {
  const absentsCount = s.split("").filter((item) => item === "A").length;
  const isIncluded3Late = s.includes("LLL");

  return absentsCount < 2 && !isIncluded3Late;
}
// @lc code=end
