// var a= -1;
// console.log(!a);
// var b= 0;
// console.log(!b);
// var c= '';
// console.log(!c);
// var d;
// console.log(!d);

function fn (ary){
    ary[0] = ary[2];
}
function bar(a,b,c){
    c=20;
    fn(arguments);
    return a+b+c;
}
console.log(bar(2,2,2));