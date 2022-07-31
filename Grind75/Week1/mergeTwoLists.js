// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]


  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    const head = new ListNode();
    let curNode = head;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            curNode.next = list1;
            list1 = list1.next;
        } else {
            curNode.next = list2;
            list2 = list2.next;
        }
        curNode = curNode.next;
    }
    curNode.next = list1 || list2;
    return head.next;
};

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);
let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

console.log(mergeTwoLists(l1,l2))

//TC: O(n) 
//SC: O(n)