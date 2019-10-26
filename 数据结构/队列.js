function Queue(){
        this.dataStore = []; // 利用数组实现队列
        this.enQueue = enQueue; // 入队
        this.deQueue = deQueue; // 出队
        this.front = front; // 取队首元素
        this.end = end; // 取队尾元素
        this.showAll = showAll; // 显示队列内的所有元素
        this.clear= clear; // 清空队列
    }
    
    function enQueue(element){
        this.dataStore.push(element);
    }
    
    function deQueue(){
        this.dataStore.shift();
    }
    
    function front(){
        return this.dataStore[0];
    }
    
    function end(){
        return this.dataStore[this.dataStore.length-1];
    }
    
    function showAll(){
        return this.dataStore.toString();
    }
    
    function clear(){
        this.dataStore = [];
    }
   