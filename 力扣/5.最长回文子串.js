// 中心扩展法
var longestPalindrome = function(s) {
    if (!s || !s.trim()) return '';
    if (s.length === 1) return s;
    if (s.length === 2) return s[0] === s[1] ? s[0] + s[1] : s[1];
    let result = '';
    /**
    *扩散坐标
    */
    var calPalindromeIndex = function(left,right,s){
        let len = s.length;
        while(left>=0&&right<len&&s[left] == s[right]){
            left--;
            right++;
        }
        return {left:left+1,right:right}
    }
    for(let i = 0,len = s.length;i<len;i++){
        let even = '';
        let odd = '';
        if(s[i] == s[i+1]){
            //经过当前位与下一位判断已构成回文，扩散位直接从下一位开始，可以提速
            let evenIndex = calPalindromeIndex(i-1,i+2,s);
            even = s.slice(evenIndex.left,evenIndex.right);
        }
        let oddIndex = calPalindromeIndex(i-1,i+1,s);
        odd = s.slice(oddIndex.left,oddIndex.right);
        let re = odd.length>even.length?odd:even;
        result = result.length>re.length?result:re;
    }
    return result;
};