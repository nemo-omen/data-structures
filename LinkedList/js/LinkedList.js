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

  empty() {
    return this.#length === 0;
  }

  /**
   * 
   * @returns Number of elements in list
   */
  size() {
    return this.#length;
  }

  /**
   * Get the ListNode at a given index.
   * @param {number} index of item to returns
   * @returns ListNode at given indexError
   */
  get(index) {
    if(this.size() === 0) 
      throw new UnderflowError('List is empty.');

    if(index < 0 || index > this.#length - 1) 
      throw new IndexError('Index out of range.');

    if(index === null || index === undefined) 
      throw new IllegalArgumentError('No index provided');
    
    if(typeof index !== 'number')
      throw new IllegalArgumentError('Index must be a number');

    let current = this.head;
    for(let i = 0; i <= index; i++) {
      if(i === index) {
        return current;
      }
      current = current.next;
    }
  }

  /**
   * Find the first element in list with data property that matches a given value.
   * @param {any} val value to search list for.
   * @returns First ListNode with data property that matches given value.
   */
  find(val) {
    if(this.size() === 0) 
      throw new UnderflowError('List is empty.');

    if(val === null || val === undefined) 
      throw new IllegalArgumentError('No value provided.');

    let current = this.head;
    for(let i = 0; i < this.size(); i++) {
      if(val === current.data) {
        return current;
      }
      current = current.next;
    }
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

    if(this.#length === 0) {
      this.head = undefined;
      this.tail = undefined;
    }

    return oldTail;
  }

  shift() {
    if(this.size() === 0) 
      throw new UnderflowError('List already empty.');
    
    if(this.size === 1) 
      return this.pop();

    let oldHead = this.head;
    this.head = oldHead.next;
    this.#length--;

    if(this.#length === 0) {
      this.head = undefined;
      this.tail = undefined;
    }

    return oldHead;
  }

  remove(index) {
    if(this.size() === 0) 
      throw new UnderflowError('List is empty.');

    if(index < 0 || index > this.#length - 1) 
      throw new IndexError('Index out of range.');

    if(index === null || index === undefined) 
      throw new IllegalArgumentError('No index provided');

    if(typeof index !== 'number')
      throw new IllegalArgumentError('Index must be a number');

    if(index === 0) return this.shift();

    let current = this.head;

    for(let i = 0; i <= index; i++) {
      if(i + 1 === index) {
        let target = current.next;
        let next = target.next;
        current.next = next;
        return target;
      }
      current = current.next;
    }
  }

  update(index, value) {
    if(this.size() === 0)
      throw new UnderflowError('List is empty.');

    if(index < 0 || index >= this.#length)
      throw new IndexError('Index out of range.');

    if(arguments.length < 2 || arguments.length > 2)
      throw new IllegalArgumentError(`Expected 2 arguments, got ${arguments.length}.`);

    let current = this.head;

    for(let i = 0; i < this.#length; i++) {
      if(i === index) {
        current.data = value
        return current;
      };
      current = current.next;
    }
  }
}