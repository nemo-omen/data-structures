import { LinkedList, ListNode } from './LinkedList.js';

const list = new LinkedList();

const node = new ListNode('Second');

list.push('First');

list.push(node);

list.push('Third');
list.push('Fourth');
list.push('Fifth');
list.push('Sixth');

console.log("" + list);

list.unshift('Seventh');
console.log("" + list);

list.shift()
console.log("" + list);

list.pop()
console.log("" + list);

console.log(list.get(2));