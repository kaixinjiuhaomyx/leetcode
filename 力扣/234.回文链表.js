var isPalindrome = function(head) {
    if (!head) return true
    let mid = null
    let slow = head
    let fast = head
    // 找出后半段的起始节点
    while(fast && fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    
    if (slow.next) {
        slow = slow.next
    }
    
    // 翻转后半段
    let prev = null
    let cur = slow
    while(cur) {
        const temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
    }
    // 对比前后半段是否一致即可得知是否为回文链表
    while(head && prev) {
        if (head.val !== prev.val) return false
        head = head.next
        prev = prev.next
    }
    return true
};