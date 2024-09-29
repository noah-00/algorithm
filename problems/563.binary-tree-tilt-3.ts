/*
 * @lc app=leetcode id=563 lang=typescript
 *
 * [563] Binary Tree Tilt
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

function getSum(node: TreeNode | null): number {
  if (node === null) {
    return 0;
  }

  return node.val + getSum(node.left) + getSum(node.right);
}

function findTilt(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const leftSum = getSum(root.left);
  const rightSum = getSum(root.right);

  const tilt = Math.abs(leftSum - rightSum);

  return tilt + findTilt(root.left) + findTilt(root.right);
}
// @lc code=end
