export class UnderflowError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnderflowError';
  }
}

export class ListNode {
  data;
  next;
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
    this.#length = 0;
  }

  size() {
    return this.#length;
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
    this.#length++;
    // console.log(this.tail);
    return this.tail;
  }

  pop() {
    if(this.size() === 0) throw new UnderflowError('List already empty.');

    let current = this.head;
    let newTail = current;
    let oldTail;
    
    while(current.next) {
      newTail = current;
      current = current.next;
    }

    oldTail = newTail.next;
    this.tail = newTail;
    this.tail.next = undefined;
    this.#length--;

    if(this.length === 0) {
      this.head = undefined;
      this.tail = undefined;
    }

    return oldTail;
  }

  get(index) {
    if(index < 0 || index > this.#length) throw new IndexError('Index out of range');

    let current = this.head;
    for(let i = 0; i <= index; i++) {
      if(i === index) {
        return current;
      }
      current = current.next;
    }
  }

  insert(val, index) {
    if(index < 0 || index > this.length) throw new IndexError('Index out of bounds');
    // if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    let newNode = new ListNode(val);
    let previous = this.get(index - 1);
    let temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;
    this.length++;
    newNode.id = this.length;
    return true;
  }
}