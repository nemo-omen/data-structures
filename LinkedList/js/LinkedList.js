export class ListNode {
<<<<<<< HEAD
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
=======
  next;
  data;
  constructor(val) {
    this.data = val;
    this.next = undefined;
>>>>>>> 6f531d9ffc4d989ed9c4bd785459c144131dedb0
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