
//   Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// var reverseList = function(head) {
//     if(head == null || head.next == null ){
//         return head;
//     }  var newHead = reverseList(nextNode);
//     var nextNode = head.next;
   
//     nextNode.next = head;
//     head.next = null;
//     return newHead;
// };


var rev = function(head) {
    var list = head;
        var p = list;
        var q = null;
        
        if(p == null)	//做个判断啊！！非常傻的一个错
            return null;

        while(p.next !== null) {
            q = p.next;
            p.next = q.next;
            q.next = list;
            list = q;     
        }
        return list;
};

// var rev = function(head) {
//     if(head == null || head.next == null ) 
//                 return head;
//     var nextNode = head.next;
//     var newHead = reverseList(nextNode);
//     console.log(1111111111);
//     nextNode.next = head;
//     head.next = null;
//     return newHead;
// };

console.log(rev([1,2,3,4,5,6]));