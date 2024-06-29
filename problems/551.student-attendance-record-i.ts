/*
 * @lc app=leetcode id=551 lang=typescript
 *
 * [551] Student Attendance Record I
 */

// @lc code=start
function checkRecord(s: string): boolean {
  // Count the number of absents
  const absentsCount = s.split("").filter((x) => x === "A").length;
  // Check if the string includes "LLL"
  const isIncluded3Late = s.includes("LLL");

  return absentsCount < 2 && !isIncluded3Late;
}
// @lc code=end
