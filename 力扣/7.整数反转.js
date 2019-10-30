// 整数反转
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。


var reverse = function(x) {
    let syb = "", num;
    if(x<0){
        syb = "-";
        x = 0 - x;
    }
    num = (x+"").split("").reverse().join("");
    if(num.length>10 || num.length === 10 && num > (x<0?"2147483648":"2147483647")){
        return 0;
    }else{
        return syb + num;
    }
};

// 优先级排序为：非-->与-->或

// stringObject.split(separator,howmany)
// 如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割。

// //////////////////////
var a = 02;
console.log(a +'');  // 数字类型转换为字符串类型
console.log('a');  // 不知道为啥这么变就不对？？？？？？？？
console.log(a);
