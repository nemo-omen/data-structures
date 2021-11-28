class Node {
  constructor(value, next=null) {
      this.value = value;
      this.next = next;
  }
}

class LinkedList {
  constructor(...values) {
      this._head = null;
      this.push(...values);
      return new Proxy(this, {
          get(that, prop) {
              return typeof prop === "string" && /^(0|-?[1-9]\d*)$/.test(prop) 
                  ? that._nodeAt(+prop).value 
                  : Reflect.get(...arguments);
          },
          set(that, prop, value) {
              return typeof prop === "string" && /^(0|-?[1-9]\d*)$/.test(prop)
                  ? (that._nodeAt(+prop).value = value) 
                  : Reflect.set(...arguments);
          }
      });
  }
  _nodeAt(i) {
      // Contrary to Array, support negative indexes: they count from the back of the list
      if (i < 0 && (i += this.length) < 0) throw new Error("Invalid index"); 
      let node = this._head;
      while (i-- > 0 && node) node = node.next;
      if (!node) throw new Error("Invalid index");
      return node;
  }
  push(...values) {
      if (!values.length) return;
      if (!this._head) this._head = new Node(values.shift());
      let tail = this._nodeAt(-1);
      for (let value of values) tail = tail.next = new Node(value);
      // Contrary to Array, return the linked list, not its new length
      return this; 
  }
  get length() {
      let count = 0;
      for (let _ of this) count++;
      return count;
  }
  set length(length) {
      if (length == 0) {
          this._head = null;
      } else try {
          this._nodeAt(length - 1).next = null;
      } catch {
          throw new Error("Invalid length");
      }
  }
  * [Symbol.iterator]() {
      for (let node = this._head; node; node = node.next) yield node.value;
  }
  toString() {
      return "«" + [...this].join("→") + "»";
  }
}

// Create list: a->b->c->d
let list = new LinkedList("a", "b", "c", "d");
console.log("initial list to string: " + list);

console.log("index access:");
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}
console.log("last is: " + list[-1]);
console.log("double each value");
for (let i = 0; i < list.length; i++) {
    list[i] += list[i];
}
console.log("" + list);
console.log("iterate:");
for (let value of list) {
    console.log(value);
}
console.log("convert to array:");
console.log([...list]);
console.log("set length to 2:");
list.length = 2;
console.log("" + list);