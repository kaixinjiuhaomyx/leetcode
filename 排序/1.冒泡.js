var arr1 = [5,4,8,1,3,7,0,9,2,6];

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        var swaped = 0;
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                var temp = arr[j+1];        //元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
                swaped = 1;
            }
        }   
        if(swaped == 0){ // 排序完成后退出
            break;
        }
        console.log("第"+(i+1)+"次循环",arr,'swaped'+swaped);
    }
    return arr;
}

bubbleSort(arr1);


// function f1() {

//     var n = 999;

//     nAdd = function () {
//         n += 1;
//         console.log(n)
//     }

//     function f2() {
//         console.log(n);
//     }
//     return f2;
// }
// var result = f1();

// result(); //  999

// nAdd();  // 1000

// result(); // 1000