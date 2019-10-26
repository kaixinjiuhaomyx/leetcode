// var findMedianSortedArrays = function(nums1, nums2) {

//     var arr1 = nums1.concat(nums2);
//     var arr2 = arr1.sort((a,b) =>{
//         return a-b;
//     });

//     var len = arr2.length;

//     if(len % 2 == 1){
//         return arr2[parseInt(len/2)];
//     }else{
//         var a = len/2;
//         var out = (arr2[a] + arr2[a-1]) / 2;
//         return out;
//     }
// };

// console.log(findMedianSortedArrays([1,3],[2]) );

var findMedianSortedArrays = function (nums1, nums2) {
    var arr = [];
    var sum = nums1.length + nums2.length;
    var i = 0;
    var j = 0;

    //对两个数组，根据各自的大小排序
    while (sum) {
        if (nums1[i] == undefined) {//nums1数组遍历完
            arr.push(nums2[j])
            j++;
        } else if (nums2[j] == undefined) {//nums2数组遍历完
            arr.push(nums1[i]);
            i++;
        } else {//都没遍历完
            if (nums1[i] < nums2[j]) {//把小的push
                arr.push(nums1[i]);
                i++;
            } else {
                arr.push(nums2[j]);
                j++;
            }
        }
        sum--
    }
    //arr为新的数组，已经对两个数组排序号
    sum = nums1.length + nums2.length;
    //判断奇偶数
    if (sum % 2 == 0) {
        return (arr[sum / 2 - 1] + arr[sum / 2]) / 2
    } else {
        return arr[(sum + 1) / 2 - 1]
    }
};