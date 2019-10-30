// 基本思想：基于二分查找算法，将查找点的选择改进为自适应选择，可以提高查找效率。当然，插值查找也属于有序查找。

// mid=low+1/2*(high-low);将查找的点改进为如下：

// mid=low+(key-a[low])/(a[high]-a[low])*(high-low)，

// 　　注：对于表长较大，而关键字分布又比较均匀的查找表来说，插值查找算法的平均性能比折半查找要好的多。反之，数组中如果分布非常不均匀，那么插值查找未必是很合适的选择。

// 　　复杂度分析：查找成功或者失败的时间复杂度均为O(log2(log2n))。

function InsertionSearch(arr, val, start, end){
    var end = end || data.length - 1;
    var start = start || 0;

    var mid = start + (val - arr[low]) / (arr[end] - arr[start]) * (end - start);
    if(arr[mid] == val){
       return mid;
    }

    if(arr[mid] > val){
        return InsertionSearch(arr, val, start, mid - 1);
    }
    else{
        return InsertionSearch(arr, val, mid + 1, end);
   }
}
