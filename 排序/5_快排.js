function quickSort( arr ){
    if ( arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push( arr[i] );
        } else {
            right.push( arr[i] );
        }
    }
    console.log(left .concat( pivot, right));
    return quickSort( left ).concat( pivot, quickSort( right ));
}
// var arr1 = [5,4,8,1,3,7,0,9,2,6];
var arr1 = [72,1,68,95,75,54,58,10,35,6,28,45,69,13,88,99,24,28,30,31,78,2,77,82,72];

var arr = quickSort( arr1 );
console.log(arr);