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

import { TreeNode } from "../Tree";

function sumOfLeftLeaves(root: TreeNode | null): number {
  let sum = 0;
  function traverse(node: TreeNode | null) {
    if (!node) return;

    const left = node.left;
    const right = node.right;

    if (!left && !right) return;

    if (left && !left.right && !left.left) {
      // it is a left leaf
      sum += left.val;
    }

    traverse(left);
    traverse(right);
  }

  traverse(root);

  return sum;
}
// @lc code=end
