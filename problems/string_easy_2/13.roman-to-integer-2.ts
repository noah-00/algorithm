/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start

function romanToInt(s: string): number {
  const symbolicValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  } as const;

  const stringList = s.split("");
  // Convert the string s into an array of characters
  // Example: if s = 'IVV', stringList = ['I', 'V', 'V']

  let output = 0; // Variable to hold the final integer value
  let index = 0; // Index to track the current position in the string list

  // This loop will continue as long as index is less than the length of stringList
  while (index < stringList.length) {
    // If the value of the current character is less than the value of the next character
    if (symbolicValue[stringList[index]] < symbolicValue[stringList[index + 1]]) {
      // Subtract the value of the current character from the next character's value, and add the result to output
      output += symbolicValue[stringList[index + 1]] - symbolicValue[stringList[index]];
      index++; // Increment index to skip the next character as it's already processed
    } else {
      // Otherwise, add the value of the current character to output
      output += symbolicValue[stringList[index]];
    }
    // Move to the next character
    index++;
  }
  return output;
}
// @lc code=end
