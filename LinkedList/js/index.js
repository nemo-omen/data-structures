import { LinkedList, ListNode } from './LinkedList.js';

const list = new LinkedList();

const node = new ListNode('Second');

list.push('First');

list.push(node);

list.push('Third');
list.push('Fourth');
list.push('Fifth');
list.push('Sixth');

// console.log(list.update(1, 'Whatever'));

// list.push('Second');

// list.push('Third');

// list.push('Fourth');
// list.get(1);

// console.log(list.get(1));

// list.insert('Fifth', 1);

// console.log('original: ', list);

const cpList = LinkedList.copy(list);

const nList = new LinkedList();

nList.push(56);
nList.push(12);
nList.push(6);
nList.push(3);
nList.push(30);
nList.push(99);
nList.push(2);

const snList = new LinkedList();
snList.push(0);
snList.push(1);
snList.push(2);
snList.push(3);
snList.push(4);
snList.push(5);
snList.push(6);
snList.push(7);
snList.push(8);
snList.push(9);
// console.log('copy: ', cpList);

const mapTest = list.map((item) => item + " dookie");

const sortedN = LinkedList.sort(nList);

console.log("" + sortedN);

console.log("" + LinkedList.sort(list));

console.log("" + snList);

snList[snList.length - 1].data = 22;

console.log(snList[snList.size() - 1]);
console.log(snList[- 1]);
