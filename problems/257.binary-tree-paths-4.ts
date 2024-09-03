/*
 * @lc app=leetcode id=257 lang=typescript
 *
 * [257] Binary Tree Paths
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

function binaryTreePaths(root: TreeNode | null): string[] {
  const path: number[] = [];
  const result: string[] = [];

  function traverse(node: TreeNode | null) {
    if (!node) return;

    if (!node.left && !node.right) {
      path.push(node.val);
      result.push(path.join("->"));
      path.pop();
      return;
    }

    path.push(node.val);
    traverse(node.left);
    traverse(node.right);
    path.pop();
  }

  traverse(root);

  return result;
}
// @lc code=end
