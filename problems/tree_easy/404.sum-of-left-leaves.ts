/*
 * @lc app=leetcode id=404 lang=typescript
 *
 * [404] Sum of Left Leaves
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumOfLeftLeaves(root: TreeNode | null): number {
  let sum = 0;
  const traverse = (current: TreeNode | null, position: string) => {
    if (!current) return;
    if (!current.left && !current.right) {
      sum += position === "left" ? current.val : 0;
      return;
    }
    traverse(current.left, "left");
    traverse(current.right, "right");
  };
  traverse(root, "");

  return sum;
}
// @lc code=end
