import { TreeNode } from "./Tree";

/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
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

function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];
  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
}
// @lc code=end

// Input: root = [1,null,2,3]
// Output: [1,3,2]

// first call
// [...inorderTraversal(null), 1, ...inorderTraversal({val: 2, left: {val: 3, left: null, right: null}, right: null})];
// second call
// [...inorderTraversal({val: 3}, left: null, right: null), 2, ...inorderTraversal(null)];
