/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
  let low = 0; // Initialize the lower boundary of the search range
  let high = x; // Initialize the upper boundary of the search range to x

  while (low <= high) {
    const mid = Math.floor((low + high) / 2); // Calculate the middle point of the current range
    const square = mid * mid; // Compute the square of the mid point

    if (square <= x) {
      low = mid + 1; // If square is less than or equal to x, narrow down to the upper half of the range
    } else {
      high = mid - 1; // If square is greater than x, narrow down to the lower half of the range
    }
  }

  return high; // After exiting the loop, high will be the integer part of the square root of x
}
// @lc code=end
