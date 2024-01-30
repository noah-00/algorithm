/*
 * @lc app=leetcode id=345 lang=typescript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
function reverseVowels(s: string): string {
  const arr = s.split("");
  let left = 0;
  let right = arr.length - 1;
  let n = "";
  const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  while (left <= right) {
    if (set.has(arr[left]) && set.has(arr[right])) {
      n = arr[left];
      arr[left] = arr[right];
      arr[right] = n;
      left++;
      right--;
    } else if (!set.has(arr[left])) {
      left++;
    } else {
      right--;
    }
  }

  return arr.join("");
}
// @lc code=end
