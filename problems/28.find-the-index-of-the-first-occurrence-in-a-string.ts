/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}
// @lc code=end

// haystack = "sadbutsad", needle = "sad"
// s | a | d | b | u | t | s | a | d
// s | a | d
// = 0

// haystack = "PubSubHubbub", needle = "ub"
// P | u | b | S | u | b | H | u | b | b | u | b
//   | u | b |
// 0   1   2
// = 1

// haystack = "leetcode", needle = "leeto"
// l | e | e | t | c | o | d | e
// l | e | e | t | o
// = -1
