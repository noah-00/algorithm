/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
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

const depth = (root: TreeNode | null) => {
  if (!root) return [true, 0];

  const left = depth(root.left);
  const right = depth(root.right);

  return [
    left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1,
    Math.max(left[1], right[1]) + 1
  ];
};

function isBalanced(root: TreeNode): boolean {
  return !!depth(root)[0];
}
// @lc code=end
