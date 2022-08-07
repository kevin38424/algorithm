// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

//iteratively
// function reverseList(head) {
//   let prev = null;
//   while (head) {
//     let nextHead = head.next;
//     head.next = prev;
//     prev = head;
//     head = nextHead;
//   }
//   return prev;
// }

//recursively
function reverseList(head, prev = null) {
  if (head === null) return prev;
  let nextHead = head.next;
  head.next = prev;
  prev = head;
  head = nextHead;
  return reverseList(head, prev);
}
