export class ListNode {
  data;
  next;
  constructor(val) {
    this.data = val;
    this.next = undefined;
  }
} 

class LinkedList {
  head;
  tail;
  length;
  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  push(val) {
    let node = new ListNode(val);

    if(!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this.tail;
  }
}

export default LinkedList;