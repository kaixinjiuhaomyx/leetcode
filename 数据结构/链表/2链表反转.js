/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head == null || head.next == null ) 
                return head;
    var nextNode = head.next;
    var newHead = reverseList(nextNode);
    nextNode.next = head;
    head.next = null;
    return newHead;
};

console.log(reverseList([1,2,3,4,5]));