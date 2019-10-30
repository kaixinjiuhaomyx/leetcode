/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

//  快慢指针
var hasCycle = function(head) {
    if( head == null || head.next == null ){
        return false;
    }
    var slow = head; //slow pointer moves one step forward
    var fast = head; //fast pointer moves two steps forward
    while( true ){
        if( fast.next == null || fast.next.next == null ){
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
        if( fast === slow ){
            return true;
        }
    }
};
