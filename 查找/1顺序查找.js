// 说明：顺序查找适合于存储结构为顺序存储或链接存储的线性表。
// 基本思想：顺序查找也称为线形查找，属于无序查找算法。从数据结构线形表的一端开始，顺序扫描，依次将扫描到的结点关键字与给定值k相比较，若相等则表示
//          查找成功；若扫描结束仍没有找到关键字等于k的结点，表示查找失败。

// @param {被查找数组} arr 
// @param {查找的关键值} value 

function SequenceSearch(arr, value){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] == value){
            return i;
        }
    }
    return  -1;
}
