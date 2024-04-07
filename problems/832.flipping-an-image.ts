/*
 * @lc app=leetcode id=832 lang=typescript
 *
 * [832] Flipping an Image
 */

// @lc code=start
function flipAndInvertImage(image: number[][]): number[][] {
  return image.map((rows) => rows.reverse().map((bit) => Number(!bit)));
}
// @lc code=end
