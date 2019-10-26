var lengthOfLongestSubstring = function(s) {
    let ans = 0
    let line = []
    s.split('').forEach((item, index) => {
        if (line.indexOf(item) !== -1) {
            line.splice(line.indexOf(item), line.length)
        }
        console.log(line);
        line.unshift(item)
        ans = Math.max(ans, line.length)
    })
    return ans
};
console.log(lengthOfLongestSubstring("pwwkew"));