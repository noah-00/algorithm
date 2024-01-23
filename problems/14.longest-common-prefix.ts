/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }

  return prefix;
}
// @lc code=end

// strs: ["boll","call","cell"]
// init prefix:  flower

// for

// 1: flow
// 2: flight

// while

// 1: flow
// "flow".indexOf("flower"): -1
// "flow".indexOf("flowe"): -1
// "flow".indexOf("flow"): 0

// 1: flight
// "flight".indexOf("flow"): -1
// "flight".indexOf("flo"): -1
// "flight".indexOf("fl"): 0
