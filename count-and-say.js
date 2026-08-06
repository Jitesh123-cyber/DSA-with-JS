/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let ans = "1";

    for (let i = 2; i <= n; i++) {
        let temp = "";
        let count = 1;

        for (let j = 0; j < ans.length; j++) {

            while (j + 1 < ans.length && ans[j] === ans[j + 1]) {
                count++;
                j++;
            }

            temp += count;
            temp += ans[j];
            count = 1;
        }

        ans = temp;
    }

    return ans;
};
