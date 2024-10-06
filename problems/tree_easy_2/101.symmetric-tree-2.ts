/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
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

const isSymmetric = (root: TreeNode | null): boolean => {
  return isMirror(root, root);
};

const isMirror = (t1: TreeNode | null, t2: TreeNode | null): boolean => {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null) return false;

  return t1.val === t2.val && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
};

// @lc code=end

// Input: root = [1,2,2,3,4,4,3]
// Output: true

// isSymmetric
// isMirror([1,2,2,3,4,4,3], [1,2,2,3,4,4,3])

// isMirror
// t1 = [1,2,2,3,4,4,3]
// t2 = [1,2,2,3,4,4,3]

// t1.val = 1
// t1.left = [2,3,4]
// t1.right = [2,4,3]

// t2.val = 1
// t2.left = [2,3,4]
// t2.right = [2,4,3]

// t1.val === t2.val && ①isMirror([2,3,4], [2,4,3]) && ②isMirror([3,4], [4,3])

// ①isMirror
// t1 = [2,3,4]
// t2 = [2,4,3]

// t1.val = 2
// t1.left = [3]
// t1.right = [4]

// t2.val = 2
// t2.left = [4]
// t2.right = [3]

// t1.val === t2.val && ①isMirror([3], [4]) && ②isMirror([4], [3])

// ①isMirror
// t1 = [3]
// t2 = [4]

// t1.val = 3
// t1.left = null
// t1.right = null

// t2.val = 4
// t2.left = null
// t2.right = null

// t1 === null && t2 === null => true

// ②isMirror
// t1 = [4]
// t2 = [3]

// t1.val = 4
// t1.left = null
// t1.right = null

// t2.val = 3
// t2.left = null
// t2.right = null

// t1 === null && t2 === null => true

// ①isMirror([3], [4]) => true
// ②isMirror([4], [3]) => true

// ①isMirror([2,3,4], [2,4,3]) => true

// ①isMirror([3,4], [4,3]) => true

// isMirror([1,2,2,3,4,4,3], [1,2,2,3,4,4,3]) => true
// isSymmetric([1,2,2,3,4,4,3]) => true
