/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  const str: string[] = magazine.split("");
  let count: number = 0;

  for (const ele of ransomNote) {
    if (str.includes(ele)) {
      count++;
      const index = str.indexOf(ele);
      str.splice(index, 1);
    }
  }
  return count === ransomNote.length ? true : false;
}
// @lc code=end
