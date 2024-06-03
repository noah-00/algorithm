/*
 * @lc app=leetcode id=345 lang=typescript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
function reverseVowels(s: string): string {
  let start = 0;
  let end = s.length - 1;

  const VOWELS = new Set(["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"]);
  const ans = [...s];

  while (start < end) {
    // Skip non-vowels
    if (!VOWELS.has(ans[start])) start++;
    // Skip non-vowels
    if (!VOWELS.has(ans[end])) end--;

    // Swap vowels
    if (VOWELS.has(ans[start]) && VOWELS.has(ans[end])) {
      const temp = ans[start];
      ans[start] = ans[end];
      ans[end] = temp;
      start++;
      end--;
    }
  }
  return ans.join("");
}
// @lc code=end
