// function fn (num){
//     // var ll = typeof(num);
//     // console.log(ll);
//     // if(ll != Number){
//     //     return null;
//     // }
//     if(num < 0){
//         return "num是负数";
//     }else if(num == 1){
//         return 'num为1';
//     }
//     for(var i =2; i<num; i++){
//         if( num%i == 0){
//             return "num 不是质数";
//         }
//     }
//     return "num 是质数";

// }

// console.log(fn(23));

var scope = "global";
function a(){
    console.log(scope);
var scope = 's';
}
a();