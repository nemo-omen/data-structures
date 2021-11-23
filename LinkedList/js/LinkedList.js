export class ListNode {
  next;
  data;
  constructor(val) {
    this.data = val;
    this.next = undefined;
  }
}

export class LinkedList {
  head;
  tail;
  #length;
  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  push(val) {
    const node = new ListNode(val);

    if(!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    console.log(this.tail);
    return this.tail;
  }

  pop() {
    if(!list.head) return;
    let current = this.head;
    let newTail = current;

    while(current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = undefined;
    this.length--;

    if(this.length === 0) {
      this.head = undefined;
      this.tail = undefined;
    }


  }
}