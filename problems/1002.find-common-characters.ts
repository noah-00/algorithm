/*
 * @lc app=leetcode id=1002 lang=typescript
 *
 * [1002] Find Common Characters
 */

// @lc code=start
function commonChars(words: string[]): string[] {
  let wordArr = words[0].split(""); //  "bella" => ["b", "e", "l", "l", "a"]

  for (let i = 1; i < words.length; i++) {
    const newCheck: string[] = [];

    for (let j = 0; j < words[i].length; j++) {
      if (wordArr.includes(words[i][j])) {
        const index = wordArr.findIndex((x) => x === words[i][j]);
        newCheck.push(words[i][j]);
        wordArr.splice(index, 1);
      }
    }

    wordArr = newCheck;
  }

  return wordArr;
}
// @lc code=end
