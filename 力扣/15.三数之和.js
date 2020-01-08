var threeSum = function(nums) {
    
    var a = 0;
    var b = nums.length-1;
    
    if(b < 2){
       return false
    }
    nums.sort((a,b)=>{
        return a-b;
    });
    var suzu = [];
    
    while(a<b){
        var mm = nums[a] + nums[b];
        var c = nums.indexOf(-1*mm);
        if(c > -1 && c != a && c!= b){
            suzu.push([nums[a],nums[c],nums[b]]);
            a = a + 1;
            b = b - 1;
        }else{
           
            a = a + 1;
            b = b - 1; 
        }
    }
    return suzu;
};

var a = [-1,0,1,2,-1,-4];
console.log(threeSum(a));