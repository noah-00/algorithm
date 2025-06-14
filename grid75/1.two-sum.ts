/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const numsMap = new Map()

    for (let i = 0;i < nums.length;i++) {
        const num = nums[i]

        const diff = target - num

        if (numsMap.has(diff)) {
            return [numsMap.get(diff), i]
        }

        numsMap.set(num, i)
    }

    return [-1, -1]
};
// @lc code=end

