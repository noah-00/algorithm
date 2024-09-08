/*
 * @lc app=leetcode id=222 lang=typescript
 *
 * [222] Count Complete Tree Nodes
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

function countNodes(root: TreeNode | null): number {
  if (root == null) return 0;
  let count = 0;
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.pop();
    count++;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return count;
}

function countNodesDFS(root: TreeNode): number {
  if (root == null) return 0;

  return 1 + countNodes(root.left) + countNodes(root.right);
}
// @lc code=end
