export class UnderflowError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnderflowError';
  }
}

export class IndexError extends Error {
  constructor(message) {
    super(message);
    this.name = 'IndexError';
  }
}

export class IllegalArgumentError extends Error {
  constructor(message) {
    super(message);
    this.name = 'IllegalArgumentError';
  }
}

export class ListNode {
  data;
  next;
  constructor(val) {
    if(!val) throw new IllegalArgumentError('No value parameter provided.');
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
    if(!val) throw new IllegalArgumentError('No value parameter provided.');

    // allow for parameters of type: ListNode
    // or the value of a ListNode to be instantiated on the spot
    if(typeof val === 'object' && (val !== null || val !== undefined)) return this.push(val.data);
    const node = new ListNode(val);

    if(!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.#length++;
    return this.tail;
  }

  unshift(val) {
    if(!val) throw new IllegalArgumentError('No value parameter provided.');
    if(typeof val === 'object' && (val !== null || val !== undefined)) return this.unshift(val.data);

    if(this.size === 0) {
      this.push(val)
    } else {
      let newNode = new ListNode(val);
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
      this.#length++;
    };
    return this.head;
  }

  insert(val, index) {
    if(index < 0 || index > this.#length) 
      throw new IndexError(
          `Index out of bounds. Index ${index} is ${index < 0 ? 'smaller' : 'larger'}  than the list's size.`
      );

    if(typeof val === 'object' && (val !== null || val !== undefined)) return this.insert(val.data, index);

    if(index === this.#length) return this.push(val);

    let newNode = new ListNode(val);
    if(index === 0) {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    } else {
      let previous = this.get(index - 1);
      let temp = previous.next;
      previous.next = newNode;
      newNode.next = temp;
    }
    this.#length++;
    return newNode;
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
    if(this.size() === 0) 
      throw new UnderflowError('List is empty.');

    if(index < 0 || index > this.#length) 
      throw new IndexError('Index out of range.');

    if(index === null || index === undefined) 
      throw new IllegalArgumentError('No index provided');

    let current = this.head;
    for(let i = 0; i <= index; i++) {
      if(i === index) {
        return current;
      }
      current = current.next;
    }
  }
}