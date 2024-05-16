/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  const bracketsMap = {
    ")": "(",
    "]": "[",
    "}": "{"
  };

  const openBracketsStack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    // define the current bracket
    const currentBracket = s[i];

    // If it's an opening bracket, push it onto the stack
    if (["(", "[", "{"].includes(currentBracket)) {
      openBracketsStack.push(currentBracket);

      // If it's a closing bracket, check if it matches the last opening bracket
    } else if (openBracketsStack.pop() !== bracketsMap[currentBracket]) {
      return false;
    }
  }

  return !openBracketsStack.length;
}
// @lc code=end
