function HeapSort(arr) {
    for(var k=Math.floor(arr.length/2)-1;k>=0;k--){
        arr = HightHeap(arr,k,arr.length);
    }

    for(var j= arr.length-1;j>0;j--){
        //重新对堆顶进行调整
        var temp = arr[j];
        arr[j] = arr[0];
        arr[0] = temp;
        //调整后进行堆调整
        for(var f = Math.floor(j/2)-1;f>=0;f--)
            arr = HightHeap(arr,f,j);
    }

    return arr
}
function HightHeap(arr,i,length) {
    var current = arr[i];
    if(i*2+2<length&&arr[i*2+1]<arr[i*2+2]){
        if(arr[i*2+2]>arr[i]){
            arr[i]= arr[i*2+2];
            arr[i*2+2] =current
        }
    }
    else {
       if(arr[i*2+1]>arr[i]){
           arr[i]= arr[i*2+1];
           arr[i*2+1] =current
       }

    }
    return arr
}
var arr1 = [ 5, 19, 94, 8, 17, 1, 16, 3, 15, 7, 14, 0, 13, 96, 9, 12, 58, 2, 11, 6, 10 ];

var arr = HeapSort(arr1)
console.log(arr);