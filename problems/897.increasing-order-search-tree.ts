/*
 * @lc app=leetcode id=897 lang=typescript
 *
 * [897] Increasing Order Search Tree
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

function increasingBST(root: TreeNode | null): TreeNode | null {
  function findBiggest(root: TreeNode): TreeNode {
    if (root.right != null) {
      return findBiggest(root.right);
    }

    return root;
  }

  function increasingBST(root: TreeNode | null): TreeNode | null {
    if (root == null) {
      return null;
    }

    const newRoot = root.left;

    if (newRoot != null) {
      const newRootBiggest = findBiggest(newRoot);
      newRootBiggest.right = root;
      root.left = null;

      return increasingBST(newRoot);
    }

    root.right = increasingBST(root.right);

    return root;
  }
}
// @lc code=end
