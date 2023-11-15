/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let count = 0;

    function dfs(node, maxSoFar) {
        if (node === null) {
            return 0;
        }

        if (node.val >= maxSoFar) {
            count++;
            maxSoFar = node.val;
        }

        dfs(node.left, maxSoFar);
        dfs(node.right, maxSoFar);
    }

    dfs(root, root.val);
    return count;
};