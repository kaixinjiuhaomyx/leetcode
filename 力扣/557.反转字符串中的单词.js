var reverseWords = function(s) {
    let arr = s.split(' ');
    // console.log(arr);
    let a = arr.map(item => {
        return item.split('').reverse().join('');
    });
    
    return a.join(' ');
};
// 正则性能好