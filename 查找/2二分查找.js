// 说明：元素必须是有序的，如果是无序的则要先进行排序操作。

// 基本思想：也称为是折半查找，属于有序查找算法。用给定值k先与中间结点的关键字比较，中间结点把线形表分成两个子表，若相等则查找成功；若不相等，再根据k与该中间结点关键字的比较结果确定下一步查找哪个子表，这样递归进行，直到查找到或查找结束发现表中没有这样的结点。

// 复杂度分析：最坏情况下，关键词比较次数为log2(n+1)，且期望时间复杂度为O(log2n)；

// 注：折半查找的前提条件是需要有序表顺序存储，对于静态查找表，一次排序后不再变化，折半查找能得到不错的效率。但对于需要频繁执行插入或删除操作的数据集来说，维护有序的排序会带来不小的工作量，那就不建议使用。——《大话数据结构》

// 递归   感觉像快排
// function binarySearch(data, dest, start, end) {
//     if (start > end) { // 新增否则找不到进入死循环了
//         return false;
//     }
//     var end = end || data.length - 1;
//     var start = start || 0;
//     //  var mid = Math.floor((start + end) / 2);
//     var mid = parseInt(start + (end - start) / 2);
//     //直接命中
//     if (data[mid] == dest) {
//         return mid;
//     }
//     if (data[mid] > dest) {      // 放左
//         end = mid - 1;
//         return binarySearch(data, dest, start, end);
//     } else {         // 放右
//         start = mid + 1;
//         return binarySearch(data, dest, start, end);
//     }
//     return false;
// }

// console.log(binarySearch([1, 2, 3, 4, 5, 9, 8, 7, 12, 13, 15, 17, 18], 4))

// 非递归 用while
//代码中的判断条件必须是while (left <= right)，
//否则的话判断条件不完整，比如：array[3] = {1, 3, 5};
//待查找的键为5，此时在(low < high)条件下就会找不到，因为low和high相等时，指向元素5，但是此时条件不成立，没有进入while()中

function binarySearch2(data, dest) {
    var end = data.length - 1;
    var start = 0;
    while (start <= end) {
        var m = Math.floor((end + 1) / 2);
        if (data[m] == dest) {
            return m;
        }
        if (data[m] > dest) {
            end = m - 1;
        } else {
            start = m + 1;
        }
    }
    return false
}