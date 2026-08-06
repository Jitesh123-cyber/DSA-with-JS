/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];

    function backtrack(index, target, path) {

        // Base Case
        if (target === 0) {
            result.push([...path]);
            return;
        }

        if (index >= candidates.length || target < 0) {
            return;
        }

        // Include current element
        path.push(candidates[index]);
        backtrack(index, target - candidates[index], path);

        // Backtrack
        path.pop();

        // Exclude current element
        backtrack(index + 1, target, path);
    }

    backtrack(0, target, []);

    return result;
};
