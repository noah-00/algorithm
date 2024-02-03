/*
 * @lc app=leetcode id=509 lang=typescript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
function fib(n: number): number {
  if (n === 0) return 0;

  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }

  return fib[fib.length - 1] + fib[fib.length - 2];
}
// @lc code=end
