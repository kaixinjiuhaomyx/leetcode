var arr1 = [5,4,8,1,3,7,0,9,2,6];

function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;  // 以排好的元素序号
        current = arr[i];  // 当前被插入元素
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
        console.log("第"+(i)+"次循环",arr);
    }
    return arr;
}

insertionSort(arr1);
