/*
 * @lc app=leetcode id=530 lang=typescript
 *
 * [530] Minimum Absolute Difference in BST
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

function getMinimumDifference(root: TreeNode | null) {
  let min = Infinity;
  const visited: number[] = [];

  function dfs(node: TreeNode | null) {
    if (!node) return;

    dfs(node.left);

    visited.push(node.val);

    dfs(node.right);
  }

  dfs(root);

  for (let i = 1; i < visited.length; i++) {
    min = Math.min(min, visited[i] - visited[i - 1]);
  }

  return min;
}
// @lc code=end
