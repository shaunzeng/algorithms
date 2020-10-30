var removeDuplicates = function(nums) {

    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            nums.splice(i + 1, 1);
            i--;
        }
    }
};