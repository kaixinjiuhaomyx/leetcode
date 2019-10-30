function insertion_sort(A){
    for(let i=1; i<A.length; i++){
        let p = i-1
        const x = A[i]
        while(p>=0 && A[p]>x){
            A[p+1] = A[p]
            p--
        }
        A[p+1] = x
    }
}
//桶排序
function bucket_sort(A, k, s){ //A排序数组,k桶子数量,s桶子空间尺度
    const buckets = Array.from({length:k}, ()=>[]) //创建桶子
    //把元素放入对应桶子
    for(let i=0; i<A.length; i++){
        //计算需要放入桶子序号
        const idx = ~~(A[i]/s) 
        buckets[idx].push(A[i])
    }
    
    //对每个桶子进行排序
    for(let i=0; i<buckets.length; i++){
        //此处选取插入排序, 空间消耗少,元素少常数时间消耗短
        insertion_sort(buckets[i])
    }
    
    //把每个桶子数据合并
    return [].concat(...buckets)
}