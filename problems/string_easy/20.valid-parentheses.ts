/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  const stack = [];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "["
  };

  for (const char of s) {
    if (["(", "{", "["].includes(char)) {
      stack.push(char);
    } else if (stack.pop() !== pairs[char]) {
      return false;
    }
  }

  return stack.length === 0;
}
// @lc code=end

// s="{}"
// 1
// stack=['{'}]
// 2
// stack.pop()='{'
// pairs[char]='}'

// s="[{}]"
// 1 [
// stack=['[']
// 2 {
// stack=['[', '{']
// 3 }
// stack.pop()='{' pairs[char]='{'
// 4 ]
// stack.pop()='[' pairs[char]='['
