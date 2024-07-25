/*
 * @lc app=leetcode id=100 lang=typescript
 *
 * [100] Same Tree
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true;
  } else if (p === null || q === null) {
    return false;
  } else {
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
}
// @lc code=end

// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// first call
// 1 === 1 && isSameTree({val: 2, left: null, right: null}, {val: 2, left: null, right: null}) && isSameTree({val: 3, left: null, right: null}, {val: 3, left: null, right: null});
// second call (left)
// 2 === 2 && true && true;
// second call (right)
// 3 === 3 && true && true;
