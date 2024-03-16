/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let writePointer = 0;
  for (let readPointer = 0; readPointer < nums.length; readPointer++) {
    const val = nums[readPointer];
    nums[readPointer] = 0;
    if (val !== 0) {
      nums[writePointer] = val;
      writePointer++;
    }
  }
}
// @lc code=end

// nums= [0, 1, 0, 3, 12]

// 0
// [LOG]: 0,  "readPointer"
// [LOG]: 0,  "writePointer"
// [LOG]: 0,  "val"
// [LOG]: [0, 1, 0, 3, 12],  "nums"
// [LOG]: [0, 1, 0, 3, 12],  "nums 2"

// 1
// [LOG]: 1,  "readPointer"
// [LOG]: 0,  "writePointer"
// [LOG]: 1,  "val"
// [LOG]: [0, 0, 0, 3, 12],  "nums"
// [LOG]: [1, 0, 0, 3, 12],  "nums 2"

// 2
// [LOG]: 2,  "readPointer"
// [LOG]: 1,  "writePointer"
// [LOG]: 0,  "val"
// [LOG]: [1, 0, 0, 3, 12],  "nums"
// [LOG]: [1, 0, 0, 3, 12],  "nums 2"

// 3
// [LOG]: 3,  "readPointer"
// [LOG]: 1,  "writePointer"
// [LOG]: 3,  "val"
// [LOG]: [1, 0, 0, 0, 12],  "nums"
// [LOG]: [1, 3, 0, 0, 12],  "nums 2"

// 4
// [LOG]: 4,  "readPointer"
// [LOG]: 2,  "writePointer"
// [LOG]: 12,  "val"
// [LOG]: [1, 3, 0, 0, 0],  "nums"
// [LOG]: [1, 3, 12, 0, 0],  "nums 2"
