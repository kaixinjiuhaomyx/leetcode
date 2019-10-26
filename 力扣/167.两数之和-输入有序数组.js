// 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

var twoSum = function(numbers, target) {
    var len = numbers.length;
    var sum = [];
    for(var i=0; i<len; i++){

        if(numbers[i] <= target){
            for(var j=i+1; j<len; j++){
                if(numbers[i] + numbers[j] == target){
                    sum.push(i+1);
                    sum.push(j+1);
                }
            }
        }
    }
    return sum;
};
