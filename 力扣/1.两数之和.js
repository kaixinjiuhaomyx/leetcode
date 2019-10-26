// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

var twoSum = function(nums, target) {
    var len = nums.length;
    var sum = 0;
    var out = [];
    
    for (var i=0; i<len; i++){
        
        for(var j=i+1; j<len; j++){
            
            if(i !=j ){
                sum = nums[i] + nums[j];  
            }
            if(sum == target){
                out.push(i);
                out.push(j);
            }
        }
    };
    return out;
};