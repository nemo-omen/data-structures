import { LinkedList, ListNode } from './LinkedList.js';

const list = new LinkedList();

const node = new ListNode('Second');

list.push('First');

list.push(node);

list.push('Third');

// console.log(list.update(1, 'Whatever'));

// list.push('Second');

// list.push('Third');

// list.push('Fourth');
// list.get(1);

// console.log(list.get(1));

// list.insert('Fifth', 1);

// console.log('original: ', list);

const cpList = LinkedList.copy(list);

console.log('copy: ', cpList);

const mapTest = list.map((item) => item + " dookie");

console.log(mapTest);