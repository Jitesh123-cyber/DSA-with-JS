var nextPermutation = function(nums) {
    let i = nums.length - 2;

    // Step 1: right se first decreasing point find karo
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // Step 2: nums[i] se just greater element find karke swap
    if (i >= 0) {
        let j = nums.length - 1;

        while (nums[j] <= nums[i]) {
            j--;
        }

        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Step 3: remaining part reverse karo
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};
