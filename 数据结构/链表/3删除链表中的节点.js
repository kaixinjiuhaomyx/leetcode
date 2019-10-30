/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head == null) return null;
var node = head;
while(node != null && node.next != null){
  if(node.next.val == val){
      node.next = node.next.next;
  }
  else{
      node = node.next;
  }
}

return head.val == val ? head.next : head;
};
