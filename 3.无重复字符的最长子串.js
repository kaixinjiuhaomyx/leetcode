var lengthOfLongestSubstring = function(s) {

    // var len = s.length;
    var len = 6;
    
    var arr = [];
    var index = 0;

    for (var i=0; i<len; i++){
        if(arr.indexOf(s.charAt(i)) < 0){
            arr.push(s.charAt(i));
        }else{
            if(index < (arr.length)){
                index = arr.length;
                console.log(arr);
                arr = [];
            }
        }
    }

    return index;
};

console.log(lengthOfLongestSubstring("pwwkew"));