var arr1 = [5,4,8,1,3,7,0,9,2,6];

function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     //寻找最小的数
                minIndex = j;                 //将最小数的索引保存
            }
        }
        // temp = arr[i];
        // arr[i] = arr[minIndex];
        // arr[minIndex] = temp;
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];  // 解构
        console.log("第"+(i+1)+"次循环",arr);
    }
    return arr;
}

selectionSort(arr1)

