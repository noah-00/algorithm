/*
 * @lc app=leetcode id=112 lang=typescript
 *
 * [112] Path Sum
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

import { TreeNode } from "./Tree";

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  function dfs(n: TreeNode | null, sum: number) {
    if (!n) return false;
    if (!n.left && !n.right && sum + n.val === targetSum) return true;

    const newSum = sum + n.val;

    return dfs(n.left, newSum) || dfs(n.right, newSum);
  }

  return dfs(root, 0);
}
// @lc code=end
