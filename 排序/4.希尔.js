// 有问题
// function shellSort(arr) {
//     var len = arr.length,
//         temp,
//         gap = 1;
//     while(gap < len/3) {          //动态定义间隔序列
//         gap =gap*3+1;
//     }
//     for (gap; gap> 0; gap = Math.floor(gap/3)) {
//         for (var i = gap; i < len; i++) {
//             temp = arr[i];
//             for (var j = i-gap; j > 0 && arr[j]> temp; j-=gap) {
//                 arr[j+gap] = arr[j];
//             }
//             arr[j+gap] = temp;
//             console.log("第"+(i)+"次循环",arr);  
//         }
//     }
//     return arr;
// }

function shellSort(array) {
    var increment = array.length;
    var i
    var temp; //暂存
    do {
        //设置增量
        increment = Math.floor(increment / 3) + 1; // floor 向下取整
        for (i = increment ; i < array.length; i++) {
            if ( array[i] < array[i - increment]) {
                temp = array[i];
                for (var j = i - increment; j >= 0 && temp < array[j]; j -= increment) {
                    array[j + increment] = array[j];
                }
                array[j + increment] = temp;
            }
            console.log("第"+(i)+"次循环",array);
        }
    }
    while (increment > 1)

    return array;
}

var arr1 = [5,19,94,8,17,1,16,3,15,7,14,0,13,96,9,12,58,2,11,6,10];

shellSort(arr1);