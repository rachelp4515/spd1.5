var sortColors = function(nums) {
    var i = 0;
    var memo = [];
    
    while (i < nums.length) {
        switch(nums[i]) {
            case 0:
                memo.unshift(...nums.splice(i, 1));
                break;
            case 1:
                memo.push(...nums.splice(i, 1));
                break;
            default:
                i++;
                break;
        }
    }
    
    nums.unshift(...memo);
};