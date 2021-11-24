import { LinkedList, ListNode } from './LinkedList.js';

const list = new LinkedList();

list.push('First');

list.push('Second');

list.push('Third');

list.push('Fourth');
// list.get(1);

// console.log(list.get(1));

list.insert('Fifth', 1);

console.log(list);