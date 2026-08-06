/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

    candidates.sort((a, b) => a - b);

    let result = [];

    function dfs(start, target, path) {

        if (target === 0) {
            result.push([...path]);
            return;
        }

        if (target < 0) return;

        for (let i = start; i < candidates.length; i++) {

            // Skip duplicates
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            // Optimization
            if (candidates[i] > target) break;

            path.push(candidates[i]);

            // Next index because each element is used only once
            dfs(i + 1, target - candidates[i], path);

            path.pop();
        }
    }

    dfs(0, target, []);

    return result;
};
